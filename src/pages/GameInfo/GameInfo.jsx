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
    const [users, setUsers] = useState({}); // Стан для збереження інформації про користувачів

    // Функція для отримання даних користувача за ID
    const fetchUserById = async (userId) => {
        console.log("Шукаємо користувача за ID:", userId); // Виводимо ID, за яким робимо запит
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

                // Отримуємо всі унікальні ID гравців з поля `gameRole[0].user`
                const playerIds = [...new Set(data.flatMap(team =>
                    team.players.flatMap(player =>
                        player.gameRole.map(role => role.user)
                    ))
                )];

                if (playerIds.length > 0) {
                    // Запит на отримання деталей гравців
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

    // Оновлення даних користувачів, якщо є нові гравці
    useEffect(() => {
        if (teams.length > 0) {
            // Отримуємо всі унікальні ID гравців з поля `gameRole[0].user`
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
                    <p className="game-title">{game.name}</p>

                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">Type:</p>
                        <p className="game-info__text">{game.type}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">Name:</p>
                        <p className="game-info__text">{game.name}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">Map:</p>
                        <p className="game-info__text">{game.map}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">Date:</p>
                        <p className="game-info__text">{game.date}</p>
                    </div>

                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">About:</p>
                        <p className="game-info__text">{game.about}</p>
                    </div>

                    <div className="game-card__info box-img">
                        {game.gameImages && game.gameImages.map((image, index) => (
                            <img key={index} src={image} alt={`Game image ${index + 1}`} className="box-img__preview" />
                        ))}
                    </div>

                    {/* Відображення команд */}
                    <div className="game-card__info teams">
                        <p className="game-info__tytle">Teams:</p>
                        {teams.length > 0 ? (
                            teams.map(team => (
                                <div key={team._id} className="team">
                                    <p className="team__color">Color: {team.color}</p>
                                    <div className="team__players">
                                        <p>Players:</p>
                                        <ul>
                                            {team.players.map(player => {
                                                // Отримуємо ID користувача з поля `gameRole[0].user`
                                                const userId = player.gameRole[0]?.user;
                                                const user = users[userId]; // Отримуємо дані користувача за ID

                                                // Якщо користувача немає в стані, робимо запит для отримання його даних
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
                                                        {user
                                                            ? `${user.name} ${user.surname} (ID: ${userId}) - Роль: ${player.gameRole?.map(role => role.role).join(", ") || "Немає ролі"}`
                                                            : `Завантаження даних користувача...`}
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