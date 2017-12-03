import {combineReducers} from 'redux';
import auth from './AuthReducer';
import employeeForm from './EmployeeFormReducer';
import employees from './EmployeeReducer';

export default combineReducers({
	auth,
	employeeForm,
	employees
});