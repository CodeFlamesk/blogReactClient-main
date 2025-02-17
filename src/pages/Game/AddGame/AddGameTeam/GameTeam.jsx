import './game-team.scss'
import axios from "axios";
import basketRole from '../img/basketRole.png'
import CustomSelect from 'components/ui/Acordion/Accordion';
import { useEffect, useState } from 'react';


const GameTeam = () => {
    const [users, setUsers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
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
    const [roles, setRoles] = useState([{ id: Date.now(), role: null, user: null }]);
    const [team, setTeam] = useState([{ id: Date.now(), team: null, user: null }]);

    const handleRoleSelect = (roleId, selectedRole) => {
        if (!selectedRole) return;

        const updatedRoles = roles.map(role =>
            role.id === roleId ? { ...role, role: selectedRole } : role
        );

        setRoles(updatedRoles);
    };



    // Оновлення вибору користувача для конкретного блоку за id


    const handleTeamSelect = (team, teamId) => {
        setTeam(prevTeams =>
            prevTeams.map(t =>
                t.id === teamId ? { ...t, team: team } : t
            )
        );
        console.log("Вибрана команда:", team);
    };

    const handleUserSelectForRole = (roleId, selectedUser) => {
        console.log(`🔹 Вибрано користувача для ролі ID ${roleId}:`, selectedUser);
        if (!selectedUser) return;

        setRoles(prevRoles =>
            prevRoles.map(role =>
                role.id === roleId ? { ...role, user: selectedUser } : role
            )
        );
    };

    return (
        <>
            {
                team.map((item) => (
                    <div key={item.id} className="team-card">
                        <CustomSelect
                            options={teamFilter}
                            selectedOption={item.team?.value}
                            onSelect={(team) => handleTeamSelect(team, item.id)}
                            styles="custom-select__language"
                            text="Team"
                            styleheader="custom-select-team__header"
                        />




                        <div className="team-card__add-role add-role">
                            <p className="add-role__number">№</p>
                            <p className="add-role__role">Role:</p>
                            <p className="add-role__name">Name:</p>
                        </div>

                        {roles.map((roleItem, roleIndex) => (
                            <div key={roleItem.id} className="team-card__add-role add-role">
                                <p className="add-role__number">{roleIndex + 1}</p>
                                <div className="add-role__role">
                                    <CustomSelect
                                        options={roleFilter}
                                        selectedOption={roleItem.role || ""}
                                        onSelect={(selectedRole) => handleRoleSelect(roleItem.id, selectedRole)}
                                        styles="custom-select__language"
                                        text="Role"
                                        styleheader="custom-select-team__role"
                                    />


                                </div>
                                <div className="add-role__name">
                                    <CustomSelect
                                        options={users.map(user => ({ value: user._id, label: user.surname }))}
                                        selectedOption={roleItem.user?.value}
                                        onSelect={(selectedUser) => handleUserSelectForRole(roleItem.id, selectedUser)}
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

                        <button type="button" onClick={addRole} className="team-card__button">Add Role</button>
                        <button type="button" onClick={() => removeTeam(item.id)} className="team-card__button-remove">! Delete Team !</button>
                    </div>
                ))
            }

            < button type="button" onClick={addTeam} className="team-card__button" > Add Team</button >
        </>

    )
}
export default GameTeam;