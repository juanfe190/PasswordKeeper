import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default 
class MenuItem extends Component
{
	constructor(props){
		super(props);
	}

	render()
	{
		return(
			<TouchableHighlight style={style.container} onPress={this.props.onPress}>
				<View>
					<Text style={style.text}>{this.props.text}</Text>
				</View>	
			</TouchableHighlight>
		)
	}
}

const style = StyleSheet.create({
 	container: {
 		alignSelf: 'stretch',
 		padding: 20,
 		borderBottomWidth: 2,
    	borderBottomColor: '#252525'
 	},

 	text: {
 		marginLeft: 10,
 		color: '#F5FCFF'
 	}
});