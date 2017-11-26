import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

var Spinner = (prop) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={prop.size || 'large'}/>
		</View>
	);
}

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}
export {Spinner};