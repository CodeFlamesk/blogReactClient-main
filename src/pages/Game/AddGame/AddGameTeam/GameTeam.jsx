import './game-team.scss';
import axios from 'axios';
import basketRole from '../img/basketRole.png';
import CustomSelect from 'components/ui/Acordion/Accordion';
import { useEffect, useState } from 'react';

const GameTeam = () => {
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([{ id: Date.now(), team: null }]);
    const [roles, setRoles] = useState([{ id: Date.now(), teamId: teams[0].id, role: null, user: null }]);

    const handleSubmitTeamAndRoles = async (e) => {
        e.preventDefault();

        try {
            const createdTeams = {}; // Мапінг: старий team.id → новий team._id

            // 🔹 1. Створюємо команди
            for (const team of teams) {
                if (!team.team) {
                    throw new Error("Кожна команда повинна мати колір!");
                }

                const response = await axios.post("http://localhost:5000/api/teams", {
                    color: team.team.value,
                    players: []  // Ініціалізуємо як порожній масив
                });

                createdTeams[team.id] = response.data._id; // Записуємо новий teamId
            }

            // 🔹 2. Створюємо ролі (TeamRole) і зберігаємо мапінг: { teamId, roleId }
            const createdRoles = [];
            for (const role of roles) {
                const newTeamId = createdTeams[role.teamId];

                if (newTeamId && role.role && role.user) {
                    const roleResponse = await axios.post("http://localhost:5000/api/team-role", {
                        role: role.role.value,
                        user: role.user.value,
                        teamId: newTeamId
                    });
                    // Зберігаємо об'єкт із новим teamId та roleId
                    createdRoles.push({ teamId: newTeamId, roleId: roleResponse.data._id });
                }
            }

            // 🔹 3. Групуємо ролі за новими ID команд
            const teamsWithPlayers = Object.entries(createdTeams).map(([oldTeamId, newTeamId]) => {
                const teamRoles = createdRoles
                    .filter((r) => r.teamId === newTeamId)
                    .map((r) => r.roleId);
                return {
                    teamId: newTeamId,
                    players: teamRoles  // Масив ID ролей для цієї команди
                };
            });

            // 🔹 4. Оновлюємо команди з ролями (players)
            for (const teamData of teamsWithPlayers) {
                await axios.put(`http://localhost:5000/api/teams/${teamData.teamId}`, {
                    players: teamData.players  // Передаємо масив ID ролей
                });
                console.log(`Ролі успішно додані до команди ${teamData.teamId}`);
            }

            alert("Команди та ролі успішно збережені!");
        } catch (error) {
            console.error("Помилка при створенні команд і ролей:", error.response);
            alert(error.response?.data?.message || "Помилка при створенні команд і ролей!");
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

    const addTeam = () => {
        const newTeamId = Date.now();
        setTeams((prev) => [...prev, { id: newTeamId, team: null }]);
        setRoles((prev) => [...prev, { id: Date.now() + 1, teamId: newTeamId, role: null, user: null }]);
    };

    const removeTeam = (idToRemove) => {
        setTeams((prev) => prev.filter((team) => team.id !== idToRemove));
        setRoles((prev) => prev.filter((role) => role.teamId !== idToRemove));
    };

    const addRole = (teamId) => {
        setRoles((prev) => [...prev, { id: Date.now(), teamId, role: null, user: null }]);
    };

    const removeRole = (roleId) => {
        setRoles((prev) => prev.filter((role) => role.id !== roleId));
    };

    const handleTeamSelect = (teamId, selectedTeam) => {
        setTeams((prev) => prev.map((team) => (team.id === teamId ? { ...team, team: selectedTeam } : team)));
    };

    const handleRoleSelect = (roleId, selectedRole) => {
        setRoles((prev) => prev.map((role) => (role.id === roleId ? { ...role, role: selectedRole } : role)));
    };

    const handleUserSelect = (roleId, selectedUser) => {
        setRoles((prev) => prev.map((role) => (role.id === roleId ? { ...role, user: selectedUser } : role)));
    };

    return (
        <>
            {teams.map((teamItem) => {
                const teamRoles = roles.filter((role) => role.teamId === teamItem.id);

                return (
                    <div key={teamItem.id} className="team-card">
                        <CustomSelect
                            options={teamFilter}
                            selectedOption={teamItem.team}
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

                        {teamRoles.map((roleItem, roleIndex) => (
                            <div key={roleItem.id} className="team-card__add-role add-role">
                                <p className="add-role__number">{roleIndex + 1}</p>

                                <div className="add-role__role">
                                    <CustomSelect
                                        options={roleFilter}
                                        selectedOption={roleItem.role}
                                        onSelect={(selectedRole) => handleRoleSelect(roleItem.id, selectedRole)}
                                        styles="custom-select__language"
                                        text="Role"
                                        styleheader="custom-select-team__role"
                                    />
                                </div>

                                <div className="add-role__name">
                                    <CustomSelect
                                        options={users.map((user) => ({ value: user._id, label: user.surname }))}
                                        selectedOption={roleItem.user}
                                        onSelect={(selectedUser) => handleUserSelect(roleItem.id, selectedUser)}
                                        styles="custom-select__language"
                                        text="Name"
                                        styleheader="custom-select-team__role"
                                    />
                                </div>

                                <button type="button" className="add-role__delete" onClick={() => removeRole(roleItem.id)}>
                                    <img src={basketRole} alt="basket" />
                                </button>

                            </div>
                        ))}
                        <input
                            type="text"
                            value={teamRoles.map(role => role.role?.label).filter(Boolean).join(', ')}
                            readOnly
                            className="custom-input"
                        />

                        <button type="button" onClick={() => addRole(teamItem.id)} className="team-card__button">
                            Add Role
                        </button>

                        <button type="button" onClick={() => removeTeam(teamItem.id)} className="team-card__button-remove">
                            ! Delete Team !
                        </button>
                    </div>

                );
            })}

            <button type="button" onClick={addTeam} className="team-card__button">
                Add Team
            </button>

            <button type="button" className="team-card__button" onClick={handleSubmitTeamAndRoles} >
                Save
            </button>
        </>
    );
};

export default GameTeam;