import { useEffect, useState } from "react";
import type { User } from "../../UserType";

import AddUserComponentV2 from "./AddUserComponentV2";
import ListComponent from "./ListComponent";

const ContainerComponent = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				if (!response.ok) {
					throw new Error(`Request failed: ${response.status}`);
				}
				const data: User[] = await response.json();
				setUsers(data);
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : "Unknown error";
				setError(message);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const handleAddUser = (user: Pick<User, "username" | "email">) => {
		const newUser: User = {
			id: Date.now(),
			username: user.username,
			email: user.email,
			name: "",
		};
		setUsers((prevUsers) => [...prevUsers, newUser]);
	};

	return (
		<div>
			<h1>ContainerComponent</h1>
			<hr />
			<h1>Add User</h1>
			<AddUserComponentV2 onAddEvent={handleAddUser} />
			{loading && <p>Loading users...</p>}
			{error && <p style={{ color: "red" }}>Error: {error}</p>}
			<ListComponent users={users} />
		</div>
	);
};

export default ContainerComponent;
