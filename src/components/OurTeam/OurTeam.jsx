import { useEffect, useState } from "react";
import "./our-team.scss";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
    console.error("❌ API_URL is undefined. Check your .env file!");
}

const OurTeam = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                setError("❌ No token found. User is not authenticated.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`${API_URL}/api/user/users`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                console.log("🔹 Server response:", response);
                if (!response.data || typeof response.data !== "object") {
                    throw new Error("❌ Invalid API response format");
                }

                setUsers(Array.isArray(response.data) ? response.data : response.data.users || []);
            } catch (error) {
                console.error("Error fetching users:", error.message);
                setError(error.message);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [token]);

    const roles = ["LEADER", "ADMIN", "OFFICER", "SERGEANT", "STATIK", "RECRUIT"];

    const renderRoleBlock = (role) => {
        if (!Array.isArray(users)) return null;

        const roleUsers = users.filter((user) => user.role === role);
        if (roleUsers.length === 0) return null;

        return (
            <div className="team__block" key={role}>
                <h2>{role}</h2>
                <div className="team-block__container">
                    {roleUsers.map((user) => (
                        <div key={user._id} className="team__box box-user">
                            <div className="box-user__user user">
                                <p>{user.surname}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="team-section">
            <p className="team-section__title">Our Team</p>
            <div className="team-section__list team">
                {loading ? (
                    <p>Завантаження...</p>
                ) : error ? (
                    <p>Помилка: {error}</p>
                ) : users.length > 0 ? (
                    roles.map(renderRoleBlock)
                ) : (
                    <p> (No users found)</p>
                )}
            </div>
        </section>
    );
};

export default OurTeam;
