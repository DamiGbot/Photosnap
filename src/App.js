import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

import "./sass/App.css";

const Stories = React.lazy(() => import("./pages/Stories"));

function App() {
	return (
		<>
			<Switch>
				<Route path={"/"} exact>
					<Redirect to={"/home"} />
				</Route>

				<Route path="/home">
					<Home />
				</Route>

				<Route path="/stories">
					<Stories />
				</Route>

				<Route path="/features">
					<Features />
				</Route>

				<Route path="/pricing">
					<Pricing />
				</Route>

				<Route path={"*"}>{/* created a not found page */}</Route>
			</Switch>
		</>
	);
}

export default App;
