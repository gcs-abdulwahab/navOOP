import { useEffect, useState } from "react";
import type { User } from "../UserType";

const SimpleLoadingComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                console.log("Fetched users:", data);
                setUsers(data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
	return (
		<div>
            <h1>SimpleLoadingComponent</h1>
            <p>Number of users: {users.length}</p>
            {loading && <p>Loading...</p>}
            {!loading && users.length === 0 && <p>No users found.</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
		</div>
	);
};

export default SimpleLoadingComponent;
