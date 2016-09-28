import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default 
class PasswordItem extends Component
{
	constructor(props){
		super(props);
	}

	render()
	{
		return(
			<View style={styles.container}>
				<Icon name="lock-outline" size={35} />

				<View style={styles.textContainer}>
					<Text style={styles.name}>{this.props.name}</Text>  
					<Text>Plantilla: {this.props.template}</Text>
				</View>
		    </View>
		);
	}



}
const styles = 
StyleSheet.create({
	container: {
		height: 50,
		//borderWidth: 1,
		//borderColor: 'black',
		alignItems: 'center',
		margin: 5,
		flexDirection: 'row',
		marginBottom: 10
	},

	textContainer: {
		marginLeft: 15
	},

	name:{
		color: "black",
	}
});