export const scrollEvent = (f) => {
	window.addEventListener("scroll", f);
	return () => window.removeEventListener("scroll", f);
};
