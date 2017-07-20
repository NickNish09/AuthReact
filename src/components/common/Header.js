// Import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style = {viewStyle}>
			<Text style = {textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 7,
		position: 'relative'
	},
	textStyle: {
		fontSize: 28
	}
};
// Make component availble
export {Header};