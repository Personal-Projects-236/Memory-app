import { useEffect } from "react";

import { loadData, moreData, scrollEvent } from "../utils";

import useAppContext from "./useAppContext";

const useInfiniteScroll = (endpoint) => {
	const { state, dispatch } = useAppContext();
	const { dataReducer } = state;
	const { len, data, flag } = dataReducer;
	const l = len;
	const d = data.length;

	const isScrolling = () => {
		let height = window.innerHeight;
		let scrollTop = document.documentElement.scrollTop;
		let offsetHeight = document.documentElement.offsetHeight;

		if (height + scrollTop !== offsetHeight) {
			return;
		} else {
			l < d
				? dispatch({ type: "SET_FLAG", flag: false })
				: dispatch({ type: "SET_FLAG", flag: true });
		}
	};

	useEffect(() => {
		loadData(endpoint, dispatch);
		scrollEvent(isScrolling);
	}, [dispatch, endpoint]);

	useEffect(() => {
		if (flag) {
			moreData(endpoint, dataReducer, dispatch);
		}
	}, [flag, dataReducer, dispatch, endpoint]);

	return data;
};

export default useInfiniteScroll;
