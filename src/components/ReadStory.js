import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

import classes from "../sass/components/Stories/ReadStory.module.scss";
import Arrow from "./UI/Arrow";

const ReadStory = (props) => {
	const match = useMediaQuery("(min-width: 768px)");
	console.log(match);

	return (
		<React.Fragment>
			{props.list.map((el) => (
				<div
					key={el.id}
					className={classes.story}
					style={{
						backgroundImage: `url(${require(`../dev-data/assets/stories/${
							match ? "desktop" : "mobile"
						}/${el.images}`)})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "50%",
					}}
				>
					{el.date && <p className={classes["story_date"]}>{el.date}</p>}
					<h3 className={classes["story_title"]}>{el.title}</h3>
					<p className={classes["story_author"]}>by {el.author}</p>

					<div className={classes["story_line"]}></div>

					<Link to={"/stories"} className={classes["story_actions"]}>
						<p className={classes["story_actions--title"]}>Read story</p>

						<Arrow className={classes["story_actions--arrow"]} />
					</Link>
				</div>
			))}
		</React.Fragment>
	);
};

export default ReadStory;
