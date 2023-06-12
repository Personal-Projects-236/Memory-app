import Card from "react-bootstrap/Card";

import { spinner, btn } from "../atom";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/components/molecule/Card.module.css";

const Card_Molecule = () => {
	const { state } = useAppContext();
	const { dataReducer } = state;
	const { data } = dataReducer;

	return (
		<>
			{data === undefined ? (
				spinner()
			) : (
				<div className={styles.container}>
					{data.map(({ title, image, description }, index) => (
						<div key={index}>
							<Card className={styles.card}>
								<Card.Title className={styles.title}>{title}</Card.Title>
								<hr />
								<Card.Img className={styles.image} variant="top" src={image} />
								<Card.Text className={styles.description}>
									{description}
								</Card.Text>
								<div className={styles.buttons}>
									{btn("danger", "Delete")}
									{btn("primary", "Update")}
								</div>
							</Card>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Card_Molecule;
