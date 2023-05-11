import styles from "../../styles/components/template/PageSplit.module.css";

const PageSplit = () => {
	return (
		<div className={styles.div}>
			<div className={styles.left}>
				<h1>left</h1>
			</div>
			<div className={styles.right}>
				<h1>right</h1>
			</div>
		</div>
	);
};

export default PageSplit;
