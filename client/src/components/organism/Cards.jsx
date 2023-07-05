import { Card } from "react-bootstrap";

import { btn, spinner } from "../atom";

import useAppContext from "../../hooks/useAppContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll.jsx";

import { confirmation, updateForm } from "../../utils";

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
					{data.map((items) => (
						<div key={items.id}>
							<Card className={styles.card}>
								<Card.Title className={styles.title}>{items.title}</Card.Title>
								<Card.Img
									className={styles.image}
									variant="top"
									src={items.image}
								/>
								<Card.Text className={styles.description}>
									{items.description}
								</Card.Text>
								<div className={styles.description}>
									{btn("danger", "Delete", () =>
										confirmation(`/card?id=${items.id}`, dispatch)
									)}
									{btn("primary", "Update", () => updateForm(items, dispatch))}
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
