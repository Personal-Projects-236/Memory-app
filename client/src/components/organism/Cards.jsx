import { Card } from "react-bootstrap";

import { btn, spinner } from "../atom";

import useInfiniteScroll from "../../hooks/useInfiniteScroll.jsx";

import styles from "../../styles/components/organism/Cards.module.css";

const Cards = () => {
	const data = useInfiniteScroll("/card");

	// FIX: spinner keeps spinning when there is no data in db
	// FIX: if I post something to db from form it gives me a data error

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

export default Cards;
