import "./App.css";
import SimpleLoadingComponent from "./components/SimpleLoadingComponent";
import SimpleLoadingNavComponent from "./components/SimpleLoadingNavComponent";

function App() {
	return (
		<>
			<h1 className="text-2xl">Ready</h1>
			{/* <MyUserComponent /> */}
			{/* <SimpleLoadingComponent /> */}

			<SimpleLoadingNavComponent />
			
		</>
	);
}

export default App;
