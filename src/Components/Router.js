import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Header from "./Header";
import Detail from "Routes/Detail";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/tv" component={TV} />
			<Route path="/search" component={Search} />
			<Route path="/movie/:id" component={Detail} />
			<Route path="/show/:id" component={Detail} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);
