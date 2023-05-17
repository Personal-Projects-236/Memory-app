import { useContext } from "react";
import { Context } from "../Context/constructors/store.jsx";

const useAppContext = () => {
	return useContext(Context);
};

export default useAppContext;
