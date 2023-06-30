import { Card } from "react-bootstrap";

import { btn, spinner } from "../atom";

import useAppContext from "../../hooks/useAppContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll.jsx";

import { confirmation } from "../../utils";

import styles from "../../styles/components/organism/Cards.module.css";

const Cards = () => {
	const data = useInfiniteScroll("/card");
	const { dispatch } = useAppContext();

	return (
		<>
			{data.length === 0 ? (
				spinner()
			) : (
				<div className={styles.container}>
					{data.map(({ id, title, description, image }) => (
						<div key={id}>
							<Card className={styles.card}>
								<Card.Title className={styles.title}>{title}</Card.Title>
								<Card.Img className={styles.image} variant="top" src={image} />
								<Card.Text className={styles.description}>
									{description}
								</Card.Text>
								<div className={styles.description}>
									{btn("danger", "Delete", () =>
										confirmation(`/card?id=${id}`, dispatch)
									)}
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

export default Cards;
