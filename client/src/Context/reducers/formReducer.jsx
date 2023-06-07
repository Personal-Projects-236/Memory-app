export const formReducer = (state, action) => {
	const { type, msg, status } = action;

	switch (type) {
		case "JSON_RESPONSE":
			return { ...state, msg, status };
		default:
			return state;
	}
};
