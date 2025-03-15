import axios from "axios";
import { useState, useRef, useEffect } from "react";
import "./add-game.scss";
import basket from './img/basket.png';
import GameTeam from "./AddGameTeam/GameTeam";
const API_URL = import.meta.env.VITE_API_URL;
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


    const handleInputChange = (e) => {
        setGameData({ ...gameData, [e.target.name]: e.target.value });
    };



    useEffect(() => {
        return () => {
            previews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [previews]);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files).slice(0, 2);

        if (images.length + newFiles.length > 2) {
            alert("Ви можете вибрати тільки 2 файли.");
            return;
        }
        const updatedImages = [...images, ...newFiles].slice(0, 2);
        const updatedPreviews = updatedImages.map(file => URL.createObjectURL(file));

        setImages(updatedImages);
        setPreviews(updatedPreviews);
    };

    const handleDeleteFile = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);

        URL.revokeObjectURL(previews[index]);

        setImages(updatedImages);
        setPreviews(updatedPreviews);

        if (updatedImages.length === 0 && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const [gameId, setGameId] = useState(null); // Додаємо стан для gameId

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const { type, date, name, map, about } = gameData;

        formData.append("type", type);
        formData.append("date", date);
        formData.append("name", name);
        formData.append("map", map);
        formData.append("about", about);

        if (images.length) {
            images.forEach(image => formData.append("gameImages", image));
        }

        try {
            const response = await fetch(`${API_URL}/api/games`, {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error(`Помилка сервера ${response.status}: ${await response.text()}`);

            const result = await response.json();
            console.log("✅ Успішно:", result);

            setGameId(result._id); // Зберігаємо gameId
        } catch (error) {
            console.error("❌ Помилка відправки:", error.message);
        }
    };


    return (
        <div className="layout-container admin">

            <form onSubmit={handleSubmit} className="admin__form new-game">
                <p>Type</p>
                <input type="text" name="type" placeholder="Type" className="new-game__input" onChange={handleInputChange} />
                <p>Date</p>
                <input type="text" name="date" placeholder="Date" className="new-game__input" onChange={handleInputChange} />
                <p>Name</p>
                <input type="text" name="name" placeholder="Name" className="new-game__input" onChange={handleInputChange} />
                <p>Map</p>
                <input type="text" name="map" placeholder="Map" className="new-game__input" onChange={handleInputChange} />
                <p>About game</p>
                <textarea name="about" placeholder="About game" className="new-game__about-game" onChange={handleInputChange} />

                <p className="new-game__map-title">Add a tactic image (max 2)</p>
                <div className="new-game__add-map add-map">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        id="fileInput"
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


                {gameId && <GameTeam gameId={gameId} />}


                <button type="submit" onClick={handleSubmit} className="new-game__button">Save</button>
            </form>
        </div>
    );
};

export default AddGame;
