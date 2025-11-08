import type { User } from "../UserType";

interface ShowUsersComponentProps {
	data: User[];
}

// This component is now a pure presentational component.
// It relies directly on the data prop so that when App updates its users state, the new list renders.
const ShowUsersComponent = ({ data }: ShowUsersComponentProps) => {

	return (
		<div>
			<h2>Show Users Component</h2>
			<ul>
				{data.map((user) => (
					<li key={user.id}>
						{user.firstName} {user.lastName} - {user.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShowUsersComponent;
