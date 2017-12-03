import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions'

class EmployeeCreate extends Component {
	onButtonPress () {
		var {name, phone, shift} = this.props;

		this.props.employeeCreate({
			name, 
			phone, 
			shift: shift || 'Monday'
		});
	}

	render() {
		var {name, phone} = this.props;

		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={name}
						onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						value={phone}
						onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
					/>
				</CardSection>

				<CardSection style={{flexDirection: 'column'}}>
					<Text style={styles.pickerLabelStyle}>Shift</Text>

					<Picker selectedValue={this.props.shift} onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})} style={{flex: 1}}>
						<Picker.Item label="Monday" value="Monday"/>
						<Picker.Item label="Tuesday" value="Tuesday"/>
						<Picker.Item label="Wendnesday" value="Wendnesday"/>
						<Picker.Item label="Thursday" value="Thursday"/>
						<Picker.Item label="Friday" value="Friday"/>
						<Picker.Item label="Saturday" value="Saturday"/>
						<Picker.Item label="Sunday" value="Sunday"/>
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);