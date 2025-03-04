import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./game-info.scss";
import Container from "components/Container/Container";
import SmallFooter from "components/footer/SmallFooter";

const GameInfo = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/games/${gameId}`)
            .then(({ data }) => setGame(data))
            .catch((error) => console.error("Помилка при отриманні даних гри:", error));
    }, [gameId]);

    if (!game) return <p>Завантаження...</p>;

    return (
        <>
            <Container>
                <div className=" game-card">

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
                        <p className="game-info__text"> {game.map}</p>
                    </div>
                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">Data:</p>
                        <p className="game-info__text"> {game.date}</p>
                    </div>
                    <div className="game-card__info game-info">
                        <p className="game-info__tytle">About:</p>
                        <p className="game-info__text"> {game.about}</p>
                    </div>
                    <div className="game-card__info box-img">

                        {game.gameImages && game.gameImages.map((image, index) => (
                            <img key={index} src={image} alt={`Game image ${index + 1}`} className="box-img__preview" />
                        ))}


                    </div>

                </div>
            </Container>
            <SmallFooter />
        </>
    );
};

export default GameInfo;
