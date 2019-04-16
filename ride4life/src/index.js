import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './views/HomePage';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Navbars from "./components/Navbars/Navbars";
import Footer from "./components/Footer/Footer";
import DriverLoginPage from "./views/driver/DriverLoginPage";
import DriverSignupPage from "./views/driver/DriverSignupPage";
import RiderLoginPage from "./views/rider/RiderLoginPage";
import RiderSignupPage from "./views/rider/RiderSignupPage";
import List from "./views/driver/DriverSignupPage";
import RiderHomePage from "./views/rider/RiderHomePage";
import DriverHomePage from "./views/driver/DriverHomePage";

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk,
		logger
	)
)

class App extends React.Component {
	render() {
		// if(!this.state.items){
		// 	return <Loader>Loading Data</Loader>
		// }
		return (
			<div className="App">
				<Navbars/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/rider-login" component={RiderLoginPage} />
					<Route path="/rider-signup" component={RiderSignupPage} />
					<Route path="/driver-login" component={DriverLoginPage} />
					<Route path="/driver-signup" component={DriverSignupPage} />
					<Route path="/rider-home" component={RiderHomePage} />
					<Route path="/driver-home" component={DriverHomePage} />
					{/*<Route path="/friends" component={FriendListPage}/>*/}
					{/*<PrivateRoute path="/friends" component={FriendListPage}/>*/}
				</Switch>
				{/*<Footer />*/}
			</div>
		);
	}
}

const AppWithRouter = withRouter(App)


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppWithRouter />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
