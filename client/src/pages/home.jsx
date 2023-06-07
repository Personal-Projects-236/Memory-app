import { alert } from "../components/atom";
import Header from "../components/organism/Header.jsx";
import PageSplit from "../components/template/PageSplit.jsx";

import useAppContext from "../hooks/useAppContext.jsx";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
	const { state } = useAppContext();
	const { formReducer } = state;

	return (
		<div className={styles.div}>
			<Header />
			{Object.keys(formReducer).length !== 0
				? alert(formReducer.msg, formReducer.status)
				: null}
			<PageSplit />
		</div>
	);
};

export default Home;
