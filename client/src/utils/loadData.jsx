import axios from "axios";

export const loadData = (endpoint, dispatch) => {
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
