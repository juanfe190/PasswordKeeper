import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../styles/styles.js';
import DashboardStore from '../../../src/DashboardStore.js';
import actions from '../../../src/actions.js';


export default 
class AddPicker extends Component
{
	constructor(props){
		super(props);
	}


   

	render(){
		return(
			<Animated.View style={[styles.container, this.props.style]}>
				<View style={styles.round}>
					<Icon name="vpn-key" color="white" size={25} />
				</View>
				<View style={styles.round}>
					<Icon name="vpn-key" color="white" size={25} />
				</View>
			</Animated.View>
		);
	}
}

const styles = 
StyleSheet.create({
	container: {
		right: 5,
		position: 'absolute',
		zIndex: 2
	},

	round:{
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		marginBottom: 15,
		width: 45,
    	height: 45,
    	borderRadius: 100/2,
    	backgroundColor: "#1565c0",
	}
});