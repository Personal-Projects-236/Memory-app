import { useEffect } from "react";
import axios from "axios";
import useAppContext from "./useAppContext";

const useInfiniteScroll = (endpoint) => {
	const { state, dispatch } = useAppContext();
	const { dataReducer } = state;
	const { len, data, skip, flag } = dataReducer;

	const loadData = () => {
		let url = `${endpoint}?checkLength=true`;

		axios.get(url).then((res) => {
			dispatch({
				type: "STORE_DATA",
				data: res.data.data,
				skip: 10,
				len: res.data.len,
			});
		});
	};

	const moreData = () => {
		let url = `${endpoint}?skip=${skip}`;

		axios.get(url).then((res) => {
			dispatch({
				type: "APPEND_TO_DATA",
				skip: skip < len ? skip + 10 : len,
				data: [...data, ...res.data.data],
				flag: false,
			});
		});
	};

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
		loadData();
		window.addEventListener("scroll", isScrolling);
		return () => window.removeEventListener("scroll", isScrolling);
	}, []);

	useEffect(() => {
		if (flag) {
			moreData();
		}
	}, [flag]);

	return data;
};

export default useInfiniteScroll;
