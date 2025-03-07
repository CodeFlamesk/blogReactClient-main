import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./game-info.scss";
import Container from "components/Container/Container";
import SmallFooter from "components/footer/SmallFooter";

const GameInfo = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);
    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState({});


    const fetchUserById = async (userId) => {
        console.log("Шукаємо користувача за ID:", userId);
        try {
            const response = await axios.get(`http://localhost:5000/api/user/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error("Помилка при отриманні даних користувача:", error);
            return null;
        }
    };

    // Отримання гри
    useEffect(() => {
        axios.get(`http://localhost:5000/api/games/${gameId}`)
            .then(({ data }) => setGame(data))
            .catch((error) => console.error("Помилка при отриманні даних гри:", error));
    }, [gameId]);

    // Отримання команд
    useEffect(() => {
        axios.get(`http://localhost:5000/api/teams?game=${gameId}`)
            .then(({ data }) => {
                setTeams(data);


                const playerIds = [...new Set(data.flatMap(team =>
                    team.players.flatMap(player =>
                        player.gameRole.map(role => role.user)
                    ))
                )];

                if (playerIds.length > 0) {

                    axios.get(`http://localhost:5000/api/user/users`, { params: { ids: playerIds } })
                        .then(({ data }) => {
                            const usersMap = data.reduce((acc, user) => {
                                acc[user._id] = user; // Зберігаємо користувача по його ID
                                return acc;
                            }, {});
                            setUsers(usersMap);
                        })
                        .catch(error => console.error("Помилка при отриманні користувачів:", error));
                }
            })
            .catch(error => console.error("Помилка при отриманні команд:", error));
    }, [gameId]);


    useEffect(() => {
        if (teams.length > 0) {
            const playerIds = teams.flatMap(team =>
                team.players.flatMap(player =>
                    player.gameRole.map(role => role.user)
                )
            );
            const missingUserIds = playerIds.filter(id => !users[id]);

            if (missingUserIds.length > 0) {
                console.log("Шукаємо користувачів за IDs:", missingUserIds); // Виводимо IDs, за якими робимо запит
                axios.get(`http://localhost:5000/api/user/users`, { params: { ids: missingUserIds } })
                    .then(({ data }) => {
                        const newUsers = data.reduce((acc, user) => {
                            acc[user._id] = user;
                            return acc;
                        }, {});
                        setUsers(prevUsers => ({ ...prevUsers, ...newUsers }));
                    })
                    .catch(error => console.error("Помилка при отриманні користувачів:", error));
            }
        }
    }, [teams, users]);

    if (!game) return <p>Завантаження...</p>;

    return (
        <>
            <Container>
                <div className="game-card">
                    <p className="game-card__game-title">{game.name}</p>

                    <div className="game-card__info game-info">
                        <p className="game-info__title">Type:</p>
                        <p className="game-info__text">{game.type}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__title">Name:</p>
                        <p className="game-info__text">{game.name}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__title">Map:</p>
                        <p className="game-info__text">{game.map}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__title">Date:</p>
                        <p className="game-info__text">{game.date}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__title">About:</p>
                        <p className="game-info__text">{game.about}</p>
                    </div>

                    <div className="game-card__info box-img">
                        {game.gameImages && game.gameImages.map((image, index) => (
                            <img key={index} src={image} alt={`Game image ${index + 1}`} className="box-img__preview" />
                        ))}
                    </div>

                    <p className="game-card__teams-title">Teams:</p>
                    <div className="game-card__info teams">
                        {teams.length > 0 ? (
                            teams.map(team => (
                                <div key={team._id} className="team">
                                    <p className="team__color" style={{ color: team.color, borderColor: `${team.color}` }}>{team.color}</p>

                                    <div className="team__players " >
                                        <div className="team-card__add-role add-role" style={{ color: team.color, borderColor: `${team.color}` }}>
                                            <p className="add-role__number" style={{ borderColor: `${team.color}` }}>№</p>
                                            <p className="add-role__role" style={{ borderColor: `${team.color}` }}>Role:</p>
                                            <p className="add-role__name" style={{ borderColor: `${team.color}` }}>Name:</p>
                                        </div>

                                        <ul className="team__user-roles">
                                            {team.players.map((player, index) => {
                                                const userId = player.gameRole[0]?.user;
                                                const user = users[userId];
                                                if (!user && userId) {
                                                    fetchUserById(userId).then(userData => {
                                                        if (userData) {
                                                            setUsers(prevUsers => ({
                                                                ...prevUsers,
                                                                [userId]: userData
                                                            }));
                                                        }
                                                    });
                                                }

                                                return (
                                                    <li key={player._id}>
                                                        {user ? (
                                                            <div className="team-card__add-role add-role" style={{ color: team.color, borderColor: `${team.color}` }}>

                                                                <p className="add-role__number" style={{ borderColor: `${team.color}` }}>{index + 1}</p>
                                                                <p className="add-role__role" style={{ borderColor: `${team.color}` }}>{player.gameRole?.map(role => role.role).join(", ")}</p>
                                                                <p className="add-role__name" style={{ borderColor: `${team.color}` }}>{user.surname}</p>
                                                            </div>
                                                        ) : (
                                                            "Завантаження даних користувача..."
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="game-info__text">Немає команд</p>
                        )}


                    </div>
                </div>
            </Container>
            <SmallFooter />
        </>
    );
};

export default GameInfo;