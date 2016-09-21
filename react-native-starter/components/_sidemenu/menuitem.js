import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
				<View style={style.item}>
					<Icon name={this.props.icon} color={style.text.color} style={style.icon} size={25} />
					<Text style={style.text}>{this.props.text}</Text>
				</View>	
			</TouchableHighlight>
		)
	}
}

const style = StyleSheet.create({
 	container: {
 		alignSelf: 'stretch',
 		padding: 15
 	},

 	item: {
 		flexDirection: 'row',
 		flex: 1,
 		alignItems: 'center'
 	},

 	text: {
 		marginLeft: 10,
 		color: '#333333'
 	},

 	icon: {
 		marginRight: 5
 	}
});