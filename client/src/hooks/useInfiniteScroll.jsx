import { useEffect } from "react";

import { loadData, moreData } from "../utils";

import useAppContext from "./useAppContext";

const useInfiniteScroll = (endpoint) => {
	const { state, dispatch } = useAppContext();
	const { dataReducer } = state;
	const { len, data, flag } = dataReducer;

	const isScrolling = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		) {
			return;
		} else {
			len < data.length
				? dispatch({ type: "SET_FLAG", flag: false })
				: dispatch({ type: "SET_FLAG", flag: true });
		}
	};

	useEffect(() => {
		loadData(endpoint, dispatch);
		window.addEventListener("scroll", isScrolling);
		return () => window.removeEventListener("scroll", isScrolling);
	}, []);

	useEffect(() => {
		if (flag) {
			moreData(endpoint, dataReducer, dispatch);
		}
	}, [flag]);

	return data;
};

export default useInfiniteScroll;
