import { useEffect, useState } from "react";

import FeaturePricingLayout from "../components/FeaturePricingLayout";
import PricingPlan from "../components/PricingPlan";

import classes from "../sass/pages/Pricing.module.scss";

import pricingPlanData from "../dev-data/assets/pricing/pricingPlan.json";

const Pricing = () => {
	const [isYearly, setIsYearly] = useState(false);

	useEffect(() => {
		document.title = "Photosnap | Pricing";
		window.scrollTo(0, 0);
	}, []);
	console.log(isYearly);

	const pricing = pricingPlanData.map((el) => (
		<PricingPlan
			key={el.id}
			title={el.title}
			body={el.body}
			amount={el.amount}
			dark={el.dark}
			checkDuration={isYearly}
		/>
	));

	const switchPlanHandler = () => {
		setIsYearly(!isYearly);
	};

	return (
		<FeaturePricingLayout
			image={`pricing/mobile/hero.jpg`}
			title={"Pricing"}
			content={
				" Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
			}
		>
			<section className={classes["pricing__subscription"]}>
				<div className={classes["pricing__subscription--plans"]}>
					<p
						className={`${
							isYearly
								? classes["pricing__subscription--plans__blur"]
								: classes["pricing__subscription--plans__bold"]
						} `}
					>
						Monthly
					</p>
					<div
						onClick={switchPlanHandler}
						className={`${classes["pricing__subscription--plans-toggle"]} ${
							isYearly && classes["pricing__subscription--plans__yearlyBg"]
						}`}
					>
						<div
							className={`${
								classes["pricing__subscription--plans-toggle_switch"]
							} ${isYearly && classes["pricing__subscription--plans__yearly"]}`}
						></div>
					</div>
					<p
						className={`${
							!isYearly
								? classes["pricing__subscription--plans__blur"]
								: classes["pricing__subscription--plans__bold"]
						} `}
					>
						Yearly
					</p>
				</div>

				{pricing}
			</section>
		</FeaturePricingLayout>
	);
};

export default Pricing;
