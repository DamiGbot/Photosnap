import HeroContent from "./Hero-box/HeroContent";
import HeroImage from "./Hero-box/HeroImage";

import classes from "../sass/components/FeaturePricingLayout.module.scss";

const FeaturePricingLayout = (props) => {
	return (
		<main className={classes["layout"]}>
			<section className={classes["layout-section1"]}>
				<HeroImage
					image={props.image}
					className={classes["layout-section1__hero-image"]}
				/>

				<HeroContent
					className={`${classes["layout-section1__stories"]}`}
					title={props.title}
					content={props.content}
				/>
			</section>

			{props.children}

			<HeroContent
				className={classes["layout_image"]}
				title={"We're in Beta. Get your invite today!".toUpperCase()}
				action={"Get an invite"}
				arrowClassName={classes["layout_image_arrow"]}
			/>
		</main>
	);
};

export default FeaturePricingLayout;
