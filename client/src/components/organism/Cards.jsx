import axios from "axios";
import { useEffect } from "react";

import Card_Molecule from "../molecule/Card.jsx";

import useAppContext from "../../hooks/useAppContext.jsx";

const Cards = () => {
	const { dispatch } = useAppContext();

	useEffect(() => {
		axios
			.get("/card")
			.then((res) => {
				const { data } = res;
				dispatch({ type: "STORE_DATA", data: data.data, msg: data.msg });
			})
			.catch((err) => console.log("err", err));
	}, [dispatch]);

	return (
		<div>
			<Card_Molecule />
		</div>
	);
};

export default Cards;
