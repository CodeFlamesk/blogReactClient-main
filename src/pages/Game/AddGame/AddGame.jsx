import { useState, useRef } from "react";
import "./add-game.scss";
import basket from './img/basket.png';
import ArrowDown from "components/ui/icons/ArrowDown";
import CustomSelect from "components/ui/Acordion/Accordion";

const AddGame = () => {
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [imageNames, setImageNames] = useState([]);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        if (images.length + newFiles.length > 2) {
            alert("Ви можете вибрати тільки 2 файли.");
            return;
        }

        const updatedImages = [...images, ...newFiles].slice(0, 2);
        setImages(updatedImages);
        setPreviews(updatedImages.map(file => URL.createObjectURL(file)));
        setImageNames(updatedImages.map(file => file.name));
    };

    const handleDeleteFile = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);
        const updatedNames = imageNames.filter((_, i) => i !== index);

        setImages(updatedImages);
        setPreviews(updatedPreviews);
        setImageNames(updatedNames);

        if (updatedImages.length === 0 && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    const teamFilter = [
        { value: 'red', label: 'Red team' },
        { value: 'blue', label: 'Blue team' },
        { value: 'orange', label: 'Orange team' },
        { value: 'black', label: 'Black team' },
        { value: 'gray', label: 'Gray team' },
        { value: 'green', label: 'Green team' },
        { value: 'brown', label: 'Brown team' },
        { value: 'pink', label: 'Pink team' },
        { value: 'purple', label: 'Purple team' },
    ];




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
                        <>
                            <p className="upload__name-img">{imageNames[index]}</p>
                            <div key={index} className="upload__preview preview relative group">
                                <div className="preview__delete group-hover" onClick={() => handleDeleteFile(index)}>
                                    <p>Delete</p>
                                    <img src={basket} alt="basket" />
                                </div>
                                <img src={src} alt={`Preview ${index + 1}`} />
                            </div>
                        </>
                    ))}
                </div>







                <div className="team-card">
                    {/* team */}

                    <CustomSelect
                        options={teamFilter}
                        onSelect={<ArrowDown />}
                        styles="custom-select__language"
                        text="Team"
                        styleheader="custom-select-team__header"
                    />

                    {/* role */}
                    <div className="team-card__add-role add-role">
                        <p className="add-role__number">№</p>
                        <p className="add-role__role">Role: </p>
                        <p className="add-role__name">Name</p>
                    </div>
                    {/* team */}
                    <div></div>
                </div>

                <button className="new-game__button">Save</button>
            </form>
        </div>
    );
};

export default AddGame;
