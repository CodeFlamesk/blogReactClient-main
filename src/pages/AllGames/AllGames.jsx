import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./all-games.scss";
import Container from "components/Container/Container";

const AllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/games")
            .then(({ data }) => setGames(data))
            .catch((error) => console.error("Помилка при отриманні ігор:", error));
    }, []);

    return (
        <Container>
            <div className="game-box">
                {games.map(game => (
                    <Link to={`/game/${game._id}`} key={game._id} className="game-box__game-card game-card">

                        <p className="game-title">Game:</p>
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
                            <p className="game-info__text"> {game.map}</p>
                        </div>
                        <div className="game-card__info game-info">
                            <p className="game-info__title">Data:</p>
                            <p className="game-info__text"> {game.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default AllGames;
