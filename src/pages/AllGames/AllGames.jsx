import { useEffect, useState } from "react";
import axios from "axios";
import "./all-games.scss";

const AllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/games");
                setGames(response.data);
            } catch (error) {
                console.error("Error fetching games:", error.response?.data || error.message);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            {games.map((game) => (
                <div key={game._id} className="game-card">
                    <h2 className="names">{games.name}</h2>
                    <p><strong>Карта:</strong> {game.map}</p>
                </div>
            ))}
        </div>
    );
};

export default AllGames;
