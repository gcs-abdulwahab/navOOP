import React, { useEffect, useState } from "react";
// import type { User } from "../UserType";

type User = {
	id: number;
	username: string;
	password: string;
	// other fields can be added as needed
};

const SimpleLoadingNavComponent = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string>("");

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/users");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setUsers(data.users);
		} catch (error) {
			console.error("Error fetching users:", error);
			setErrors("Error fetching users");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1> User List</h1>

			{loading && <p> Page is loading </p>}

			{errors && <p className="text-red-800"> There are some errors</p>}

			<ul>
				{users.map((user: User) => (
					<li key={user.id}>
						{user.username} - {user.password}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SimpleLoadingNavComponent;
