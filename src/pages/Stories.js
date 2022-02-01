import { useEffect } from "react";
import ReadStory from "../components/Stories/ReadStory";

import classes from "../sass/pages/Stories.module.scss";

import data from "../dev-data/assets/stories/read-story-full.json";
import HeroImage from "../components/Hero-box/HeroImage";
import HeroContent from "../components/Hero-box/HeroContent";

const Stories = () => {
	useEffect(() => {
		document.title = "Photosnap | Stories";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className={classes.stories}>
			<section className={classes["stories-section1"]}>
				<HeroImage
					image={`stories/mobile/moon-of-appalacia.jpg`}
					className={classes["stories-section1__hero-image"]}
				/>

				<HeroContent
					className={classes["stories-section1__content"]}
					featuredStory={"last's month's featured story"}
					title={"Hazy full moon of Appalachia"}
					date={"March 2nd 2020"}
					author={"by John Appleseed"}
					content={
						'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
					}
					action={"Read the story"}
					arrowClassName={classes["stories-section1__content_arrow"]}
				/>
			</section>

			<section>
				<ReadStory list={data} />
			</section>
		</main>
	);
};

export default Stories;
