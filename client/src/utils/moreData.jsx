import axios from "axios";

export const moreData = (endpoint, dataReducer, dispatch) => {
	const { skip, len, data } = dataReducer;

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
