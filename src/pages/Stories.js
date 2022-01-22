import { useEffect } from "react";

const Stories = () => {
	useEffect(() => {
		document.title = "Photosnap | Stories";
	}, []);

	return <h1>This is the stories page</h1>;
};

export default Stories;
