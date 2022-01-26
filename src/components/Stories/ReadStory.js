import React from "react";
import { Link } from "react-router-dom";

import classes from "../../sass/components/Stories/ReadStory.module.scss";

const ReadStory = (props) => {
	return (
		<React.Fragment>
			{props.list.map((el) => (
				<div
					key={el.id}
					className={classes.story}
					style={{
						background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${require(`../../dev-data/assets/stories/mobile/${el.images}`)}) no-repeat 50%`,
						backgroundSize: "cover",
					}}
				>
					{el.date && <p className={classes["story_date"]}>{el.date}</p>}
					<h3 className={classes["story_title"]}>{el.title}</h3>
					<p className={classes["story_author"]}>by {el.author}</p>

					<div className={classes["story_line"]}></div>

					<Link to={"/stories"} className={classes["story_actions"]}>
						<p className={classes["story_actions--title"]}>Read story</p>

						<svg
							className={classes["story_actions--arrow"]}
							width="42"
							height="14"
							viewBox="0 0 42 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 7H41.864" stroke="white" />
							<path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
						</svg>
					</Link>
				</div>
			))}
		</React.Fragment>
	);
};

export default ReadStory;
