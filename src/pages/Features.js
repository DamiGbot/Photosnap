import { useEffect } from "react";

const Features = () => {
	useEffect(() => {
		document.title = "Photosnap | Features";
		window.scrollTo(0, 0);
	}, []);

	return <h1>This is the features page</h1>;
};

export default Features;
