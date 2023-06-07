export const formReducer = (state, action) => {
	const { type, msg, status } = action;

	switch (type) {
		case "JSON_RESPONSE":
			return { ...state, flag: true, msg, status };
		case "RESET_FLAG":
			return { flag: false };
		default:
			return state;
	}
};
