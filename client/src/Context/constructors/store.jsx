import { createContext, useMemo, useReducer } from "react";

import { initialState } from "./initialState.jsx";
import { rootReducers } from "./rootReducers.jsx";

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducers, initialState);

	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
