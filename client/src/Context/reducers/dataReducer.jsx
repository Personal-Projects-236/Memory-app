export const dataReducer = (state, action) => {
	const { type, data, skip, len, flag } = action;

	switch (type) {
		case "STORE_DATA":
			return { ...state, data, skip, len };
		case "APPEND_TO_DATA":
			return { ...state, skip, data, flag };
		case "SET_FLAG":
			return { ...state, flag };
		case "UPDATE_SKIP":
			return { ...state, skip };
		default:
			return { ...state };
	}
};
