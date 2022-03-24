import React, { useEffect } from "react";

import SomeFeatures from "../components/SomeFeatures";

import classes from "../sass/pages/Features.module.scss";

import fullFeaturesData from "../dev-data/assets/features/full-features-data.json";
import FeaturePricingLayout from "../components/FeaturePricingLayout";

const Features = () => {
	useEffect(() => {
		document.title = "Photosnap | Features";
		window.scrollTo(0, 0);
	}, []);

	return (
		<FeaturePricingLayout
			image={`features/mobile/hero.jpg`}
			title={"Features"}
			content={
				" We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
			}
			afterImage={`features/tablet/hero.jpg`}
			laptopImage={`features/desktop/hero.jpg`}
		>
			<section className={classes["feature__features"]}>
				<SomeFeatures list={fullFeaturesData} />
			</section>
		</FeaturePricingLayout>
	);
};

export default Features;
