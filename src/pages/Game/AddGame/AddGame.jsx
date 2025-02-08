import { useState } from "react";
import "./add-game.scss";

const AddGame = () => {
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        if (images.length + newFiles.length > 2) {
            alert("Ви можете вибрати тільки 2 файли.");
            return;
        }
        const updateImages = [...images, ...newFiles].slice(0, 2);
        setImages(updateImages);
        const previewUrls = updateImages.map(file => URL.createObjectURL(file));
        setPreviews(previewUrls);

    }


    return (
        <div className="layout-container admin">
            <p className="admin__title">Edit game info</p>
            <form action="submit" className="admin__form new-game">
                <p>Type</p>
                <input type="text" placeholder="Type" className="new-game__input" />
                <p>Date</p>
                <input type="text" placeholder="Date" className="new-game__input" />
                <p>Name</p>
                <input type="text" placeholder="Name" className="new-game__input" />
                <p>Map</p>
                <input type="text" placeholder="Map" className="new-game__input" />
                <p>About game</p>
                <textarea type="text" placeholder="About game" className="new-game__about-game" />

                <p className="new-game__map-title">Add a tactic image(max 2)</p>
                <input type="file" accept="image/*" onChange={handleFileChange} />

                <div className="upload__preview-container">
                    {previews.map((src, index) => (
                        <div className="upload__preview">
                            <img key={index} src={src} alt={`Preview ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="new-game__button">
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddGame;
