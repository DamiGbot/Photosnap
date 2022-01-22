import { useEffect } from "react";

const Features = () => {
	useEffect(() => {
		document.title = "Photosnap | Features";
	}, []);

	return <h1>This is the features page</h1>;
};

export default Features;
