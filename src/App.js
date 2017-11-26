import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm/>
			</Provider>
		);
	}
}

export default App;