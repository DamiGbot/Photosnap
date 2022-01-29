import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReadStory from "../components/Stories/ReadStory";
import Arrow from "../components/UI/Arrow";

import classes from "../sass/pages/Stories.module.scss";

import data from "../dev-data/assets/stories/read-story-full.json";

const Stories = () => {
	useEffect(() => {
		document.title = "Photosnap | Stories";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className={classes.stories}>
			<section className={classes["stories-section1"]}>
				<div className={classes["stories-section1__hero-image"]}></div>

				<div className={classes["stories-section1__content"]}>
					<p className={classes["stories-section1__content--award"]}>
						last's month's featured story
					</p>

					<h3 className={classes["stories-section1__content--title"]}>
						{`Hazy full moon of Appalachia`.toUpperCase()}
					</h3>

					<p className={classes["stories-section1__content--author"]}>
						<span
							className={classes["stories-section1__content--author--date"]}
						>
							March 2nd 2020
						</span>
						by John Appleseed
					</p>

					<p className={classes["stories-section1__content--body"]}>
						The dissected plateau area, while not actually made up of geological
						mountains, is popularly called "mountains," especially in eastern
						Kentucky and West Virginia, and while the ridges are not high, the
						terrain is extremely rugged.
					</p>

					<div className={classes["stories-section1__content__actions"]}>
						<Link
							to={"#"}
							className={classes["stories-section1__content__actions--action"]}
						>
							Read the story
							<Arrow
								className={
									classes["stories-section1__content__actions--action_arrow"]
								}
							/>
						</Link>
					</div>
				</div>
			</section>

			<section>
				<ReadStory list={data} />
			</section>
		</main>
	);
};

export default Stories;
