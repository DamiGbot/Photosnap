import React from "react";

import classes from "../sass/components/PricingPlan.module.scss";
import Button from "./UI/Button";

const PricingPlan = (props) => {
	//checkDuration is false when it's monthly duration
	const amount = props.checkDuration ? +props.amount * 10 : +props.amount;

	return (
		<>
			<div
				className={`${classes["plans"]} ${
					props.dark ? classes["plans-dark"] : ""
				}`}
			>
				<h3 className={classes["title"]}>{props.title}</h3>

				<p className={classes["body"]}>{props.body}</p>

				<p className={classes["amount"]}>${amount.toFixed(2)}</p>
				<p className={classes["period"]}>per month</p>

				<Button className={classes["button"]}>
					{`Pick plan`.toUpperCase()}
				</Button>
			</div>
		</>
	);
};

export default PricingPlan;
