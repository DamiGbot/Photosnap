import React from "react";

const HeroImage = (props) => {
	return (
		<div
			className={props.className}
			style={{
				background: `url(${require(`../../dev-data/assets/${props.image}`)}) no-repeat 50%`,
				backgroundSize: "cover",
			}}
		></div>
	);
};

export default React.memo(HeroImage);
