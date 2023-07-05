export const updateForm = (items, dispatch) => {
	const { id, title, description, tags, image } = items;
	dispatch({ type: "CHANGE_UPDATE_FORM_FLAG", updatingForm: true });
	dispatch({ type: "UPDATE_FORM", id, title, description, tags, image });
};
