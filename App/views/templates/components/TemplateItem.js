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
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={styles.container}>
					<Icon name={this.props.icon} size={35} />

					<View style={styles.textContainer}>
						<Text style={styles.title}>{this.props.title}</Text>  
					</View>
			    </View>
			</TouchableHighlight>
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