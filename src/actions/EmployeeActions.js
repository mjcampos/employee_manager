import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS} from './types';

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({name, phone, shift}) => dispatch => {
	var {currentUser} = firebase.auth();

	firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.push({name, phone, shift})
		.then(() => {
			dispatch({
				type: EMPLOYEE_CREATE
			});
			Actions.employeeList({type: 'reset'})
		});
}

const employeeFetchSuccess = (payload) => {
	return {
		type: EMPLOYEES_FETCH_SUCCESS,
		payload
	}
}

export const employeeFetch = () => dispatch => {
	var {currentUser} = firebase.auth();

	firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.on('value', snapshot => {
			dispatch(employeeFetchSuccess(snapshot.val()));
		});
}

export const employeeSave = ({name, phone, shift, uid}) => dispatch => {
	var {currentUser} = firebase.auth();

	firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
		.set({name, phone, shift})
		.then(() => console.log("Saved!"));
}