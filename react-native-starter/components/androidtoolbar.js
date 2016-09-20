import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default 
class AndroidToolbar extends Component
{
	constructor(){
		super();
	}

	render(){
		return(
			<View style={[style.wrapper].concat(this.props.style)}>
				<Icon name="menu" color="white" size={30} onPress={this.props.menuIconAction} />
			</View>
		);
	}
}

const style = StyleSheet.create({
	wrapper: {
		backgroundColor: '#e57373',
	    alignSelf: 'stretch',
	    height: 50,
	    top: 0,
	    justifyContent: 'center',
	    padding: 5
	}
});