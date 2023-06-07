import Home from "../pages/home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "../Context/constructors/store.jsx";

const App = () => {
	return (
		<Provider>
			<Home />
		</Provider>
	);
};

export default App;
