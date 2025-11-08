import { useEffect, useState } from "react";
import type { User as UserType } from "../UserType";

interface ShowUsersComponentProps {
	apiUrl: string;
}

const ShowUsersComponent = ({ apiUrl }: ShowUsersComponentProps) => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		setError(null);

		fetch(apiUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);

				setUsers(data.users); // API returns { users: [...], total: ..., skip: ..., limit: ... }
			})
			.catch((error) => {
				console.error("Error fetching users:", error);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [apiUrl]); // Re-fetch when apiUrl changes

	return (
		<div>
			<h2>Show Users Component</h2>

			{loading && <div>Loading users...</div>}
			{error && <div style={{ color: "red" }}>Error: {error}</div>}
			{users.length === 0 && <div>No users found</div>}
			{users.length > 0 && (
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{user.firstName} {user.lastName} - {user.email}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ShowUsersComponent;
