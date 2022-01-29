import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import ReadStory from "../components/Stories/ReadStory";
import Features from "../components/Features/SomeFeatures";

import classes from "../sass/pages/Home.module.scss";

import homeSectionData from "../dev-data/assets/home/mobile/Section1_data.json";
import readStoryData from "../dev-data/assets/home/mobile/read-story.json";
import someFeaturesData from "../dev-data/assets/home/mobile/some_features.json";
import Arrow from "../components/UI/Arrow";

const Home = () => {
	useEffect(() => {
		document.title = "Photosnap | Home";
	}, []);

	const homeSection = useMemo(
		() =>
			homeSectionData.map((el) => (
				<React.Fragment key={el.Id}>
					<div
						className={
							el.Dark ? classes["home__hero-image"] : classes["home__images"]
						}
						style={{
							background: `url(${require(`../dev-data/assets/home/mobile/${el.image}`)}) no-repeat 50%`,
							backgroundSize: "cover",
						}}
					></div>

					<div
						className={`${classes["home__stories"]} ${
							el.Dark
								? classes["home__stories-dark"]
								: classes["home__stories-white"]
						}`}
					>
						<h3 className={classes["home__stories--title"]}>{el.title}</h3>
						<p
							className={`${classes["home__stories--content"]} ${
								!el.Dark ? classes["home__stories-white--content"] : null
							}`}
						>
							{el.content}
						</p>
						<Link
							to={!el.Dark ? "/stories" : "#"}
							className={`${classes["home__stories--action"]}  ${
								!el.Dark ? classes["home__stories-white--action"] : null
							}`}
						>
							{el.Dark ? "Get an invite" : "View the stories"}
							<Arrow
								className={`${classes["home__stories--action_arrow"]}  ${
									!el.Dark ? classes["home__stories-white--action_arrow"] : null
								}`}
							/>
						</Link>
					</div>
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
				<Features list={someFeaturesData} />
			</section>
		</main>
	);
};

export default Home;
