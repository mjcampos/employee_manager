import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEES_SAVE_SUCCESS} from './types';

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

const employeeSaveSuccess = () => {
	return {
		type: EMPLOYEES_SAVE_SUCCESS
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
		.then(() => {
			dispatch(employeeSaveSuccess());
			Actions.employeeList({type: 'reset'})
		});
}

export const employeeDelete = (uid) => () => {
	var {currentUser} = firebase.auth();

	console.log(uid);

	firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
		.remove()
		.then(() => Actions.employeeList({type: 'reset'}));
}