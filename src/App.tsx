import { useEffect, useState } from "react";
import "./App.css";
import type { User as UserType } from "./UserType";
import ShowUsersComponent from "./components/ShowUsersComponent";

function App() {
	const [users, setUsers] = useState<UserType[]>([]);

	useEffect(() => {
		fetch("https://dummyjson.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setUsers(data.users); // API returns { users: [...], total: ..., skip: ..., limit: ... }
			})
			.catch((error) => {
				console.error("Error fetching users:", error);
			});
	}, []);

	return (
		<>
			<h1> Ready</h1>

			<ShowUsersComponent data={users} />

		
		</>
	);
}

export default App;
