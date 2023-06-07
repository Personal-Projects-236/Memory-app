import { useEffect } from "react";

import { alert } from "../components/atom";
import Header from "../components/organism/Header.jsx";
import PageSplit from "../components/template/PageSplit.jsx";

import useAppContext from "../hooks/useAppContext.jsx";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
	const { state, dispatch } = useAppContext();
	const { formReducer } = state;

	const callTimer = () => dispatch({ type: "RESET_FLAG" });

	useEffect(() => {
		if (formReducer.flag === true) {
			setTimeout(callTimer, 10000);
		}
	}, [formReducer.flag]);

	return (
		<div className={styles.div}>
			<Header />
			{formReducer.flag ? alert(formReducer.msg, formReducer.status) : null}
			<PageSplit />
		</div>
	);
};

export default Home;
