import axios from "axios";

import { loadData } from "./loadData";

export const confirmation = (endpoint, dispatch) => {
	window.confirm("Are you sure that you want to delete?") &&
		axios.delete(endpoint).then((res) => {
			const { data } = res;
			dispatch({ type: "JSON_RESPONSE", msg: data.msg, status: res.status });
			res.status === 200 && loadData("/card", dispatch);
		});
};
