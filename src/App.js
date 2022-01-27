import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";

import Home from "./pages/Home";

const Stories = React.lazy(() => import("./pages/Stories"));
const Features = React.lazy(() => import("./pages/Features"));
const Pricing = React.lazy(() => import("./pages/Pricing"));

function App() {
	return (
		<Layout>
			<Suspense fallback={<div>Loading...</div>}>
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

					<Route path={"*"}>
						<Redirect to={"/home"} />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
