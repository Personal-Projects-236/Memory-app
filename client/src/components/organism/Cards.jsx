import axios from "axios";
import { Card } from "react-bootstrap";

import { btn, spinner } from "../atom";

import useAppContext from "../../hooks/useAppContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll.jsx";

import { loadData } from "../../utils";

import styles from "../../styles/components/organism/Cards.module.css";

const Cards = () => {
	const data = useInfiniteScroll("/card");
	const { dispatch } = useAppContext();

	const confirmation = (endpoint, dispatch) => {
		if (window.confirm("Are you sure that you want to delete?")) {
			axios.delete(endpoint).then((res) => {
				const { data } = res;
				dispatch({ type: "JSON_RESPONSE", msg: data.msg, status: res.status });
				res.status === 200 && loadData("/card", dispatch);
			});
		} else {
			return;
		}
	};

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
