import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Drawer from 'react-native-drawer';
import MenuItem from './_sidemenu/menuitem.js';

export default 
class AndroidToolbar extends Component
{
	constructor(){
		super();
	}

	render(){
		<View style={style}>
			<Icon name="menu" color="white" size={30} onPress={()=>actions.isMenuOpen(true)} />
		</View>
	}
}

const style = StyleSheet.create({

});