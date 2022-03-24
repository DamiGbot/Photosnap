import React from "react";
import classes from "../sass/components/PlansFeatures.module.scss";

const PlanLevel = (props) => {
	return (
		<div className={classes["plans-level"]}>
			<p className={classes["plans-level__title"]}>
				{props.title.toUpperCase()}
			</p>
			<div className={classes["plans-level__svg"]}>
				{props.isAvailable && (
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
						<path
							fill="none"
							stroke="#000"
							stroke-width="2"
							d="M1 8.124L5.623 13 17 1"
						/>
					</svg>
				)}
			</div>
		</div>
	);
};

const PlansFeatures = (props) => {
	return (
		<>
			<div className={classes["plans-features"]}>
				<h4 className={classes["plans-features__title"]}>
					{props.title.toUpperCase()}
				</h4>

				<div className={classes["plans-features__available"]}>
					<PlanLevel title={"basic"} isAvailable={props.basicAvailable} />
					<PlanLevel title={"pro"} isAvailable={props.proAvailable} />
					<PlanLevel title={"business"} isAvailable={props.businessAvailable} />
				</div>

				{!props.tablet && (
					<div className={classes["plans-features__line"]}></div>
				)}
			</div>

			{props.tablet && <div className={classes["plans-features__line"]}></div>}
		</>
	);
};

export default PlansFeatures;
