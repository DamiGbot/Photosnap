import React from "react";

const Arrow = (props) => {
	return (
		<svg
			className={props.className}
			width="42"
			height="14"
			viewBox="0 0 42 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 7H41.864" />
			<path d="M35.4282 1L41.4282 7L35.4282 13" />
		</svg>
	);
};

export default Arrow;
