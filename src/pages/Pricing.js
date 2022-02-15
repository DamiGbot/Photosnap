import { useEffect, useState } from "react";

import FeaturePricingLayout from "../components/FeaturePricingLayout";
import PricingPlan from "../components/PricingPlan";
import PlansFeatures from "../components/PlansFeatures";

import classes from "../sass/pages/Pricing.module.scss";

import pricingPlanData from "../dev-data/assets/pricing/pricingPlan.json";
import featuresAvailableData from "../dev-data/assets/pricing/featuresAvailable.json";
import useMediaQuery from "../hooks/useMediaQuery";

const Pricing = () => {
	const [isYearly, setIsYearly] = useState(false);
	const screenTablet = useMediaQuery("(min-width: 768px)");

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

	const featuresAvailable = featuresAvailableData.map((feature) => (
		<PlansFeatures
			title={feature.title}
			basicAvailable={feature.basic}
			proAvailable={feature.pro}
			businessAvailable={feature.business}
			tablet={screenTablet}
		/>
	));

	return (
		<FeaturePricingLayout
			image={`pricing/mobile/hero.jpg`}
			afterImage={`pricing/tablet/hero.jpg`}
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

				<div className={classes["pricing__subscription--prices"]}>
					{pricing}
				</div>
			</section>

			<section className={classes["pricing__features"]}>
				{screenTablet && (
					<h2 className={classes["pricing__features--bold"]}>COMPARE</h2>
				)}

				<div className={classes["pricing__features--group"]}>
					<h3 className={classes["pricing__features--group-title"]}>
						{"The features".toUpperCase()}
					</h3>

					{screenTablet && (
						<div className={classes["pricing__features--group-sub"]}>
							{["basic", "pro", "business"].map((el) => (
								<h3 className={classes["pricing__features--group-title"]}>
									{el.toUpperCase()}
								</h3>
							))}
						</div>
					)}
				</div>

				<div className={classes["pricing__features--line"]}></div>

				<div>{featuresAvailable}</div>
			</section>
		</FeaturePricingLayout>
	);
};

export default Pricing;
