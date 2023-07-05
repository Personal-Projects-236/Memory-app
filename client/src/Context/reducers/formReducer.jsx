export const formReducer = (state, action) => {
	const { type, msg, status, updatingForm } = action;
	const { id, title, description, tags, image } = action;

	switch (type) {
		case "JSON_RESPONSE":
			return { ...state, flag: true, msg, status };
		case "RESET_FLAG":
			return { flag: false };
		case "UPDATE_FORM":
			return { ...state, id, title, description, tags, image };
		case "CHANGE_UPDATE_FORM_FLAG":
			return {...state, updatingForm}
		default:
			return state;
	}
};
