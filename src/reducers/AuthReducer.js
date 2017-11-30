import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return {
				...state,
				email: action.email
			}
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.password
			}
		case LOGIN_USER_SUCCESS:
			return {
				...state, 
				...INITIAL_STATE,
				password: ''
			}
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: action.error,
				password: '',
				loading: false
			}
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error: ''
			}
		default:
			return state;
	}
}