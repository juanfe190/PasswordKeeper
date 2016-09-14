import React, { Component } from 'react';

import {
	AppRegistry, 
	Text, 
	TextInput,
	TouchableHighlight, 
	StyleSheet, 
	View} from 'react-native';

import Router from '../../core/Router.js';
import {common} from '../../styles/styles.js';
import {SideMenu, Button} from '../../core/UImanager.js';

export default
class MenuSample extends Component
{
	constructor(props){
		super(props);
	}

	render()
	{
		return(
			<View style={common.container}>
				<View style={{alignItems: 'center'}}>
			        <Text style={common.welcome}>
			          Thanks for using React Native
			        </Text>

			     	<Button value="Go to main" 
			     			style={{}} 
			     			font={{}}
			     			onPress={()=>Router.jumpTo('index')}/>

			     	<Button value="Open menu" 
			     			style={{}} 
			     			font={{}}
			     			onPress={()=>this.props._openMenu(true)}/>
			     	
			     </View>
		     </View>
		)
	}
}
