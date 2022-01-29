import { useEffect } from "react";

const Pricing = () => {
	useEffect(() => {
		document.title = "Photosnap | Pricing";
		window.scrollTo(0, 0);
	}, []);

	return <h1>This is the pricing page</h1>;
};

export default Pricing;
