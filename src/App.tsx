import "./App.css";
import ShowUsersComponent from "./components/ShowUsersComponent";

function App() {
	
	
	return (
		<>
			<h1 className="text-2xl">Ready</h1>
			<ShowUsersComponent apiUrl="https://dummyjson.com/users" />
			
		</>
	);
}

export default App;
