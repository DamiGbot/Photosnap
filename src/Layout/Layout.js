import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<MainHeader />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
