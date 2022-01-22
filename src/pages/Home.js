import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		document.title = "Photosnap | Home";
	}, []);

	return (
		<div>
			<h1>This is the home page</h1>
		</div>
	);
};

export default Home;
