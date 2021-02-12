import React from 'react';

import {Route, Switch} from "react-router-dom";

import MainPage from "./containers/MainPage";
import Register from "./containers/Register";
import ClientInfo from "./containers/ClientInfo";


const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={MainPage} />
			<Route path="/register" exact component={Register} />
			<Route path="/clientInfo" exact component={ClientInfo} />
		</Switch>
	);
};

export default Routes;