import _ from 'lodash';
import React, {Component} from 'react';
import Communcations from 'react-native-communications';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {
	state = {
		showModal: false
	}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		});
	}

	onButtonPress() {
		var {name, phone, shift} = this.props;

		this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
	}

	onTextPress() {
		const {phone, shift} = this.props;

		Communcations.text(phone, `Your upcoming shift is on ${shift}`);
	}

	render() {
		return (
			<Card>
				<EmployeeForm/>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({showModal: !this.state.showModal})}>Fire Employee</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
				>Are you sure you want to delete this?</Confirm>
			</Card>
		);
	}
}

function mapStateToProps(state) {
	var {name, phone, shift} = state.employeeForm;

	return {
		name,
		phone,
		shift
	}
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);