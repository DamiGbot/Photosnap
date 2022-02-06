import React from "react";

import classes from "../sass/components/Features/SomeFeatures.module.scss";

const SomeFeatures = (props) => {
	return (
		<>
			{props.list.map((el) => (
				<div className={classes.features} key={el.id}>
					<div className={classes["features__svg"]}>
						<img
							alt=""
							src={require(`../dev-data/assets/features/${el.svg}`)}
						/>
					</div>

					<h3>{el.title}</h3>
					<p>{el.content}</p>
				</div>
			))}
		</>
	);
};

export default SomeFeatures;
