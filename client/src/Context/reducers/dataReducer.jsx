export const dataReducer = (state, action) => {
	const { type, data, msg } = action;

	switch (type) {
		case "STORE_DATA":
			return { ...state, data, msg };
		default:
			return { ...state };
	}
};
