import axios from "axios";
import { useState, useRef, useEffect, useCallback } from "react";
import "./add-game.scss";
import basket from './img/basket.png';
import GameTeam from "./AddGameTeam/GameTeam";

const AddGame = () => {
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef(null);

    const [gameData, setGameData] = useState({
        type: "",
        date: "",
        name: "",
        map: "",
        about: "",
    });

    // Обробник зміни текстових інпутів
    const handleInputChange = useCallback((e) => {
        setGameData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    // Очищення попередніх URL при розмонтуванні
    useEffect(() => {
        return () => previews.forEach((url) => URL.revokeObjectURL(url));
    }, [previews]);

    // Обробник вибору файлів
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files).slice(0, 2 - images.length);

        if (!newFiles.length) return;

        const updatedImages = [...images, ...newFiles];
        const updatedPreviews = updatedImages.map(file => URL.createObjectURL(file));

        setImages(updatedImages);
        setPreviews(updatedPreviews);
    };

    // Видалення файлу
    const handleDeleteFile = useCallback((index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setPreviews(prev => prev.filter((_, i) => i !== index));

        URL.revokeObjectURL(previews[index]);

        if (images.length === 1 && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [images, previews]);

    // Відправка даних
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(gameData).forEach(([key, value]) => formData.append(key, value));

        images.forEach(image => formData.append("gameImages", image));

        console.log("📤 Відправка даних:", Object.fromEntries(formData.entries()));

        try {
            const response = await fetch("http://localhost:5000/api/games", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error(`Помилка сервера ${response.status}: ${await response.text()}`);

            console.log("✅ Успішно:", await response.json());

            // Очищення форми після відправки
            setGameData({ type: "", date: "", name: "", map: "", about: "" });
            setImages([]);
            setPreviews([]);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("❌ Помилка відправки:", error.message);
        }
    };

    return (
        <div className="layout-container admin">
            <p className="admin__title">Edit game info</p>
            <form onSubmit={handleSubmit} className="admin__form new-game">
                {["type", "date", "name", "map", "about"].map((field) => (
                    <div key={field}>
                        <p>{field.charAt(0).toUpperCase() + field.slice(1)}</p>
                        {field === "about" ? (
                            <textarea
                                name={field}
                                placeholder={`Enter ${field}`}
                                className="new-game__about-game"
                                value={gameData[field]}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <input
                                type="text"
                                name={field}
                                placeholder={`Enter ${field}`}
                                className="new-game__input"
                                value={gameData[field]}
                                onChange={handleInputChange}
                            />
                        )}
                    </div>
                ))}

                <p className="new-game__map-title">Add a tactic image (max 2)</p>
                <div className="new-game__add-map add-map">
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="add-map__input"
                    />
                    <label htmlFor="fileInput" className="add-map__label">
                        Choose Image
                    </label>
                </div>

                <div className="upload__preview-container upload">
                    {previews.map((src, index) => (
                        <div key={index}>
                            <p className="upload__name-img">{images[index]?.name}</p>
                            <div className="upload__preview preview relative group">
                                <div className="preview__delete group-hover" onClick={() => handleDeleteFile(index)}>
                                    <p>Delete</p>
                                    <img src={basket} alt="basket" />
                                </div>
                                <img src={src} alt={`Preview ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <GameTeam />

                <button type="submit" className="new-game__button">Save</button>
            </form>
        </div>
    );
};

export default AddGame;
