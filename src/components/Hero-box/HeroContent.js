import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../UI/Arrow";

import classes from "../../sass/components/Hero-box/HeroContent.module.scss";

const HeroContent = (props) => {
	return (
		<div className={`${classes["hero-content__content"]} ${props.className}`}>
			{props.featuredStory && (
				<p className={classes["hero-content__content--award"]}>
					{props.featuredStory}
				</p>
			)}

			<h3 className={classes["hero-content__content--title"]}>
				{`${props.title}`.toUpperCase()}
			</h3>

			{props.date && props.author && (
				<p className={classes["hero-content__content--author"]}>
					<span className={classes["hero-content__content--author--date"]}>
						{props.date}
					</span>
					{props.author}
				</p>
			)}

			<p className={classes["hero-content__content--body"]}>{props.content}</p>

			{props.action && (
				<div className={classes["hero-content__content__actions"]}>
					<Link
						to={"#"}
						className={classes["hero-content__content__actions--action"]}
					>
						{props.action}
						<Arrow className={props.arrowClassName} />
					</Link>
				</div>
			)}
		</div>
	);
};

export default HeroContent;
