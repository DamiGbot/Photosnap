import { useEffect } from "react";

const Pricing = () => {
	useEffect(() => {
		document.title = "Photosnap | Pricing";
	}, []);

	return <h1>This is the pricing page</h1>;
};

export default Pricing;
