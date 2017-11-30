import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyB9HbUwAjJPLcAfJIIG5u0X-l2SfR6lEoY",
			authDomain: "manager-88660.firebaseapp.com",
			databaseURL: "https://manager-88660.firebaseio.com",
			projectId: "manager-88660",
			storageBucket: "manager-88660.appspot.com",
			messagingSenderId: "670533674916"
		});
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		);
	}
}

export default App;