import axios from "axios";
import { useEffect } from "react";

const Cards = () => {
	useEffect(() => {
		axios
			.get("/forms")
			.then((res) => {
				console.log("res", res);
			})
			.catch((err) => console.log("err", err));
	}, []);

	return (
		<div>
			<h1>Cards</h1>
		</div>
	);
};

export default Cards;
