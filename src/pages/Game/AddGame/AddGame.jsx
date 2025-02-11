import axios from "axios";
import { useState, useRef, useEffect } from "react";
import "./add-game.scss";
import basket from './img/basket.png';
import basketRole from './img/basketRole.png'
import CustomSelect from "components/ui/Acordion/Accordion";

const AddGame = () => {
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [users, setUsers] = useState([]);
    const fileInputRef = useRef(null);

    // Стан для блоків з ролями. Генеруємо унікальний id для першого блоку.
    const [roles, setRoles] = useState([{ id: Date.now(), role: null, user: null }]);
    const [team, setTeam] = useState([{ id: Date.now(), team: null, user: null }]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.response?.data || error.message);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        return () => {
            previews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [previews]);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
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

    // Оновлення вибору ролі для конкретного блоку за id
    const handleRoleSelect = (id, selectedRole) => {
        setRoles(roles.map(role => role.id === id ? { ...role, role: selectedRole } : role));
    };

    // Оновлення вибору користувача для конкретного блоку за id
    const handleUserSelectForRole = (id, selectedUser) => {
        setRoles(roles.map(role => role.id === id ? { ...role, user: selectedUser } : role));
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

    const roleFilter = [
        { value: 'sl', label: 'SL' },
        { value: 'rifle', label: 'Rifle' },
        { value: 'med', label: 'Med' },
        { value: 'gp', label: 'Gp' },
        { value: 'lat', label: 'Lat' },
        { value: 'hat', label: 'Hat' },
        { value: 'crewman', label: 'Crewman' },
        { value: 'mortar', label: 'Mortar' },
        { value: 'mg', label: 'Mg' },
        { value: 'sniper', label: 'Sniper' },
        { value: 'sapper', label: 'Sapper' },
        { value: 'raider', label: 'Raider' },
        { value: 'cmd', label: 'Cmd' },
    ];

    // Функція для додавання нового блоку ролей із унікальним id
    const addRole = () => {
        setRoles([...roles, { id: Date.now(), role: null, user: null }]);
    };
    const addTeam = () => {
        setTeam([...team, { id: Date.now(), team: null, user: null }]);
    };

    // Функція для видалення блоку ролей за id
    const removeRole = (idToRemove) => {
        setRoles(roles.filter(role => role.id !== idToRemove));
    };
    const removeTeam = (idToRemove) => {
        setTeam(team.filter(team => team.id !== idToRemove));
    };

    return (
        <div className="layout-container admin">
            <p className="admin__title">Edit game info</p>
            <form className="admin__form new-game">
                <p>Type</p>
                <input type="text" placeholder="Type" className="new-game__input" />
                <p>Date</p>
                <input type="text" placeholder="Date" className="new-game__input" />
                <p>Name</p>
                <input type="text" placeholder="Name" className="new-game__input" />
                <p>Map</p>
                <input type="text" placeholder="Map" className="new-game__input" />
                <p>About game</p>
                <textarea placeholder="About game" className="new-game__about-game" />

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




                {team.map((item, index) => (
                    <div className="team-card">
                        <CustomSelect
                            options={teamFilter}
                            onSelect={() => { }}
                            styles="custom-select__language"
                            text="Team"
                            styleheader="custom-select-team__header"
                        />

                        {/* Заголовок для блоку ролей */}
                        <div className="team-card__add-role add-role">
                            <p className="add-role__number">№</p>
                            <p className="add-role__role">Role:</p>
                            <p className="add-role__name">Name:</p>
                        </div>

                        {/* Динамічний рендер блоків ролей */}
                        {roles.map((item, index) => (
                            <div key={item.id} className="team-card__add-role add-role">
                                <p className="add-role__number">{index + 1}</p>
                                <div className="add-role__role">
                                    <CustomSelect
                                        options={roleFilter}
                                        onSelect={(selectedRole) => handleRoleSelect(item.id, selectedRole)}
                                        styles="custom-select__language"
                                        text="Role"
                                        styleheader="custom-select-team__role"
                                    />
                                </div>
                                <div className="add-role__name">
                                    <CustomSelect
                                        options={users.map(user => ({ value: user._id, label: user.name }))}
                                        selectedOption={item.user?.value}
                                        onSelect={(selectedUser) => handleUserSelectForRole(item.id, selectedUser)}
                                        styles="custom-select__language"
                                        text="Name"
                                        styleheader="custom-select-team__role"
                                    />
                                </div>
                                <button type="button" className="add-role__delete" onClick={() => removeRole(item.id)}>
                                    <img src={basketRole} alt="basket" />
                                </button>
                            </div>
                        ))}

                        {/* Кнопка для додавання нового блоку ролей */}
                        <button type="button" onClick={addRole} className="team-card__button">Add Role</button>
                        <button type="button" onClick={() => removeTeam(item.id)} className="team-card__button-remove">! Delete Team !</button>
                    </div>
                ))}

                <button type="button" onClick={addTeam} className="team-card__button">Add Team</button>
                <button type="submit" className="new-game__button">Save</button>
            </form>
        </div>
    );
};

export default AddGame;
