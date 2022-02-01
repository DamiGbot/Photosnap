import { useEffect } from "react";
import SomeFeatures from "../components/Features/SomeFeatures";

import HeroContent from "../components/Hero-box/HeroContent";
import HeroImage from "../components/Hero-box/HeroImage";

import classes from "../sass/pages/Features.module.scss";

import fullFeaturesData from "../dev-data/assets/features/full-features-data.json";

const Features = () => {
	useEffect(() => {
		document.title = "Photosnap | Features";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className={classes["feature"]}>
			<section className={classes["feature-section1"]}>
				<HeroImage
					image={`features/mobile/hero.jpg`}
					className={classes["feature-section1__hero-image"]}
				/>

				<HeroContent
					className={`${classes["feature-section1__stories"]}`}
					title={"Features"}
					content={
						" We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
					}
				/>
			</section>

			<section className={classes["feature__features"]}>
				<SomeFeatures list={fullFeaturesData} />
			</section>

			<HeroContent
				className={classes["feature_image"]}
				title={"We're in Beta. Get your invite today!".toUpperCase()}
				action={"Get an invite"}
				arrowClassName={classes["feature_image_arrow"]}
			/>
		</main>
	);
};

export default Features;
