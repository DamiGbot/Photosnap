import React, { useEffect, useMemo } from "react";

import ReadStory from "../components/ReadStory";
import SomeFeatures from "../components/SomeFeatures";
import HeroImage from "../components/Hero-box/HeroImage";
import HeroContent from "../components/Hero-box/HeroContent";

import classes from "../sass/pages/Home.module.scss";

import homeSectionData from "../dev-data/assets/home/Section1_data.json";
import readStoryData from "../dev-data/assets/home/read-story.json";
import someFeaturesData from "../dev-data/assets/home/some_features.json";

const Home = () => {
	useEffect(() => {
		document.title = "Photosnap | Home";
		window.scrollTo(0, 0);
	}, []);

	const homeSection = useMemo(
		() =>
			homeSectionData.map((el) => (
				<React.Fragment key={el.Id}>
					<HeroImage
						dark={el.Dark}
						image={`home/mobile/${el.image}`}
						className={
							el.Dark ? classes["home__hero-image"] : classes["home__images"]
						}
					/>

					<HeroContent
						className={`${classes["home__stories"]} 
							${el.Dark ? classes["home__stories-dark"] : classes["home__stories-white"]}`}
						title={el.title}
						content={el.content}
						action={"Get an invite"}
						arrowClassName={`${classes["home__stories--action_arrow"]} ${
							!el.Dark && classes["home__stories-white--action_arrow"]
						} `}
					/>
				</React.Fragment>
			)),
		[]
	);

	return (
		<main className={classes.home}>
			<section>{homeSection}</section>

			<section className={classes["home__posts"]}>
				<ReadStory list={readStoryData} />
			</section>

			<section className={classes["home__features"]}>
				<SomeFeatures list={someFeaturesData} />
			</section>
		</main>
	);
};

export default Home;
