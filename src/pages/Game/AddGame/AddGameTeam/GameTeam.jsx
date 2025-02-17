import './game-team.scss';
import axios from 'axios';
import basketRole from '../img/basketRole.png';
import CustomSelect from 'components/ui/Acordion/Accordion'; // Ваш CustomSelect компонент
import { useEffect, useState } from 'react';

const GameTeam = () => {
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([
        {
            id: Date.now(),
            team: null, // обраний об'єкт команди (наприклад, { value: 'red', label: 'Red team' })
            roles: [{ id: Date.now(), role: null, user: null }],
        },
    ]);

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

    const addTeam = () => {
        setTeams((prev) => [
            ...prev,
            { id: Date.now(), team: null, roles: [{ id: Date.now(), role: null, user: null }] },
        ]);
    };

    const removeTeam = (idToRemove) =>
        setTeams((prev) => prev.filter((team) => team.id !== idToRemove));

    const addRole = (teamId) => {
        setTeams((prev) =>
            prev.map((team) =>
                team.id === teamId
                    ? { ...team, roles: [...team.roles, { id: Date.now(), role: null, user: null }] }
                    : team
            )
        );
    };

    const removeRole = (teamId, roleId) => {
        setTeams((prev) =>
            prev.map((team) =>
                team.id === teamId
                    ? { ...team, roles: team.roles.filter((role) => role.id !== roleId) }
                    : team
            )
        );
    };

    // Оновлюємо вибрану команду (CustomSelect для команди)
    const handleTeamSelect = (teamId, selectedTeam) => {
        setTeams((prev) =>
            prev.map((team) =>
                team.id === teamId ? { ...team, team: selectedTeam } : team
            )
        );
    };

    // Оновлюємо вибрану роль (CustomSelect для ролі)
    const handleRoleSelect = (teamId, roleId, selectedRole) => {
        setTeams((prev) =>
            prev.map((team) =>
                team.id === teamId
                    ? {
                        ...team,
                        roles: team.roles.map((role) =>
                            role.id === roleId ? { ...role, role: selectedRole } : role
                        ),
                    }
                    : team
            )
        );
    };

    // Оновлюємо вибраного користувача для ролі (CustomSelect для користувача)
    const handleUserSelect = (teamId, roleId, selectedUser) => {
        setTeams((prev) =>
            prev.map((team) =>
                team.id === teamId
                    ? {
                        ...team,
                        roles: team.roles.map((role) =>
                            role.id === roleId ? { ...role, user: selectedUser } : role
                        ),
                    }
                    : team
            )
        );
    };

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
    return (
        <>
            {teams.map((teamItem) => (
                <div key={teamItem.id} className="team-card">
                    <CustomSelect
                        options={teamFilter}
                        selectedOption={teamItem.team} // передаємо повний об'єкт
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
                                    selectedOption={roleItem.role} // передаємо об'єкт ролі
                                    onSelect={(selectedRole) =>
                                        handleRoleSelect(teamItem.id, roleItem.id, selectedRole)
                                    }
                                    styles="custom-select__language"
                                    text="Role"
                                    styleheader="custom-select-team__role"
                                />
                            </div>

                            <div className="add-role__name">
                                <CustomSelect
                                    options={users.map((user) => ({ value: user._id, label: user.surname }))}
                                    selectedOption={roleItem.user}
                                    onSelect={(selectedUser) => handleUserSelect(teamItem.id, roleItem.id, selectedUser)}
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
            <input
                type="text"
                value={teams.map(team => team.roles.map(role => role.role?.label).filter(Boolean)).flat().join(', ')}
                readOnly
                className="custom-input"
            />
            <input
                type="text"
                value={teams.map(team => team.roles.map(role => role.role?.label).filter(Boolean)).flat().join(', ')}
                readOnly
                className="custom-input"
            />
            <input
                type="text"
                value={teams.map(team => team.roles.map(role => role.user?.label).filter(Boolean)).flat().join(', ')}
                readOnly
                className="custom-input"
            />

            <button type="button" onClick={addTeam} className="team-card__button">
                Add Team
            </button>
            <button type="button" className="team-card__button">
                Save
            </button>
        </>
    );
};

export default GameTeam;
