import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ReadStory from "../components/Stories/ReadStory";
import Features from "../components/Features/SomeFeatures";

import classes from "../sass/pages/Home.module.scss";

import homeSectionData from "../dev-data/assets/home/mobile/Section1_data.json";
import readStoryData from "../dev-data/assets/home/mobile/read-story.json";
import someFeaturesData from "../dev-data/assets/home/mobile/some_features.json";

const Home = () => {
	useEffect(() => {
		document.title = "Photosnap | Home";
	}, []);

	const homeSection = homeSectionData.map((el) => (
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
					<svg
						className={`${classes["home__stories--action_arrow"]}  ${
							!el.Dark ? classes["home__stories-white--action_arrow"] : null
						}`}
						width="42"
						height="14"
						viewBox="0 0 42 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 7H41.864" />
						<path d="M35.4282 1L41.4282 7L35.4282 13" />
					</svg>
				</Link>
			</div>
		</React.Fragment>
	));

	return (
		<main className={classes.home}>
			{homeSection}

			<div className={classes["home__posts"]}>
				<ReadStory list={readStoryData} />
			</div>

			<div className={classes["home__features"]}>
				<Features list={someFeaturesData} />
			</div>
		</main>
	);
};

export default Home;
