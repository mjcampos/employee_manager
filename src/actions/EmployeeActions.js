import {EMPLOYEE_UPDATE} from './types';

export const exmployeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}