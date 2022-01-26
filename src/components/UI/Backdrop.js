import React from "react";
import ReactDOM from "react-dom";

import classes from "../../sass/components/UI/Backdrop.module.scss";

const portalDist = document.getElementById("overlay-root");

const Backdrop = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<div className={classes.backdrop}></div>,
				portalDist
			)}
		</>
	);
};

export default Backdrop;
