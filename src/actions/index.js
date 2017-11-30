import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from './types';

export const emailChanged = email => {
	return {
		type: EMAIL_CHANGED,
		email
	}
}

export const passwordChanged = password => {
	return {
		type: PASSWORD_CHANGED,
		password
	}
}

export const loginUserSuccess = user => {
	return {
		type: LOGIN_USER_SUCCESS,
		user
	}
}

export const loginUserFail = (error) => {
	return {
		type: LOGIN_USER_FAIL,
		error
	}
}

export const logingInUser = () => {
	return {
		type: LOGIN_USER
	}
}

export const loginUser = ({email, password}) => dispatch => {
	dispatch(logingInUser());

	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => dispatch(loginUserSuccess(user)))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => dispatch(loginUserSuccess(user)))
				.catch(error => dispatch(loginUserFail(error.message)));
		});
}