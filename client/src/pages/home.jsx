import Header from "../components/organism/Header.jsx";
import PageSplit from "../components/template/PageSplit.jsx";
import styles from "../styles/pages/Home.module.css";

const Home = () => {
	return (
		<div className={styles.div}>
			<Header />
			<PageSplit />
		</div>
	);
};

export default Home;
