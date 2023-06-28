import Home from "../pages/home.jsx";
import { Provider } from "../Context/constructors/store.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/constructors/App.module.css";

const App = () => {
	return (
		<div className={styles.div}>
			<Provider>
				<Home />
			</Provider>
		</div>
	);
};

export default App;
