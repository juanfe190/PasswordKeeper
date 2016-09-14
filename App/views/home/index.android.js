import React, { Component } from 'react';

import {
	AppRegistry, 
	Text, 
	Navigator, 
	TouchableHighlight, 
	View,
	TextInput
} from 'react-native';

import {common} from '../../styles/styles.js';
import Router from '../../core/Router.js';
import {Button} from '../../core/UImanager.js';

export default 
class LoginView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	render()
	{
		return(
			<View style={common.container}>
				<View style={{alignItems: 'center'}}>
			        <Text style={common.welcome}>
			          Welcome
			        </Text>

			        <TextInput 
			        	onChangeText={(value)=>this.setState({username: value})} 
			        	style={common.txtinput}
			        	placeholder='Username'
			        />

			        <TextInput 
			        	onChangeText={(value)=>this.setState({password: value})} 
			        	style={common.txtinput}
			        	secureTextEntry={true}
			        	placeholder='Password'

			        />

			     	<Button value="Log in" 
			     			style={{}} 
			     			font={{}}
			     			onPress={()=>Router.jumpTo('menu')} 
			     	/>
			     	
			     </View>
		     </View>
		);
	}

}