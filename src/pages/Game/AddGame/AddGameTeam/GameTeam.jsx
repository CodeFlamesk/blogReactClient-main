import './game-team.scss'
import axios from "axios";
import basketRole from '../img/basketRole.png'
import CustomSelect from 'components/ui/Acordion/Accordion';
import { useEffect, useState } from 'react';

const GameTeam = () => {
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([{
        id: Date.now(),
        team: null,
        roles: [{ id: Date.now(), role: null, user: null }],
    }]);

    // Фільтри для вибору
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

    // Завантаження користувачів
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


    const updateTeams = (updatedTeam) => setTeams((prev) =>
        prev.map((team) => (team.id === updatedTeam.id ? updatedTeam : team))
    );

    // Додавання нової команди з роллю
    const addTeam = () => {
        const newTeam = {
            id: Date.now(),
            team: null,
            roles: [{ id: Date.now(), role: null, user: null }],
        };
        setTeams((prev) => [...prev, newTeam]);
    };

    // Видалення команди
    const removeTeam = (idToRemove) => setTeams((prev) => prev.filter((team) => team.id !== idToRemove));

    // Додавання ролі
    const addRole = (teamId) => {
        const updatedTeam = teams.find((team) => team.id === teamId);
        updatedTeam.roles.push({ id: Date.now(), role: null, user: null });
        updateTeams(updatedTeam);
    };


    const removeRole = (teamId, roleId) => {
        const updatedTeam = teams.find((team) => team.id === teamId);
        updatedTeam.roles = updatedTeam.roles.filter((role) => role.id !== roleId);
        updateTeams(updatedTeam);
    };


    const handleTeamSelect = (teamId, selectedTeam) => {
        const updatedTeam = teams.find((team) => team.id === teamId);
        updatedTeam.team = selectedTeam;
        updateTeams(updatedTeam);
    };

    // Оновлення вибраної ролі
    const handleRoleSelect = (teamId, roleId, selectedRole) => {
        const updatedTeam = teams.find((team) => team.id === teamId);
        const roleToUpdate = updatedTeam.roles.find((role) => role.id === roleId);
        roleToUpdate.role = selectedRole;
        updateTeams(updatedTeam);
    };

    // Оновлення вибраного користувача для ролі
    const handleUserSelectForRole = (teamId, roleId, selectedUser) => {
        const updatedTeam = teams.find((team) => team.id === teamId);
        const roleToUpdate = updatedTeam.roles.find((role) => role.id === roleId);
        roleToUpdate.user = selectedUser;
        updateTeams(updatedTeam);
    };

    return (
        <>
            {teams.map((teamItem) => (
                <div key={teamItem.id} className="team-card">
                    <CustomSelect
                        options={teamFilter}
                        selectedOption={teamItem.team?.value}
                        onSelect={(selected) => handleTeamSelect(teamItem.id, selected)}
                        styles="custom-select__language"
                        text="Team"
                        styleheader="custom-select-team__header"
                    />
                    <div className="team-card__add-role add-role">
                        <p className="add-role__number">№</p>
                        <p className="add-role__role">Role:</p>
                        <p className="add-role__name">Name:</p>
                    </div>

                    {teamItem.roles.map((roleItem, roleIndex) => (
                        <div key={roleItem.id} className="team-card__add-role add-role">
                            <p className="add-role__number">{roleIndex + 1}</p>
                            <div className="add-role__role">
                                <CustomSelect
                                    options={roleFilter}
                                    selectedOption={roleItem.role || ""}
                                    onSelect={(selectedRole) => handleRoleSelect(teamItem.id, roleItem.id, selectedRole)}
                                    styles="custom-select__language"
                                    text="Role"
                                    styleheader="custom-select-team__role"
                                />
                            </div>
                            <div className="add-role__name">
                                <CustomSelect
                                    options={users.map((user) => ({ value: user._id, label: user.surname }))}
                                    selectedOption={roleItem.user?.value}
                                    onSelect={(selectedUser) => handleUserSelectForRole(teamItem.id, roleItem.id, selectedUser)}
                                    styles="custom-select__language"
                                    text="Name"
                                    styleheader="custom-select-team__role"
                                />
                            </div>
                            <button
                                type="button"
                                className="add-role__delete"
                                onClick={() => removeRole(teamItem.id, roleItem.id)}
                            >
                                <img src={basketRole} alt="basket" />
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addRole(teamItem.id)}
                        className="team-card__button"
                    >
                        Add Role
                    </button>
                    <button
                        type="button"
                        onClick={() => removeTeam(teamItem.id)}
                        className="team-card__button-remove"
                    >
                        ! Delete Team !
                    </button>
                </div>
            ))}

            <button type="button" onClick={addTeam} className="team-card__button">
                Add Team
            </button>
        </>
    );
};

export default GameTeam;
