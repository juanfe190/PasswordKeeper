import React, { Component } from 'react';
import {Router, Button} from 'react-native-starter';
import {AndroidToolbar} from '../../../react-native-starter/index.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
	AppRegistry, 
	Text, 
	Navigator, 
	TouchableHighlight, 
	View,
	TextInput
} from 'react-native';

import {common} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import MainStore from '../../src/MainStore.js';

export default 
class LoginView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			error: false
		}
	}
	

	login()
	{
		if(this.state.username == 'test' && this.state.password == 'test') Router.jumpTo('menu');
		else this.setState({error: true});
	}

	render()
	{
		return(
			<View style={{flex: 1}}>
				<AndroidToolbar menuIconAction={()=>actions.isMenuOpen(true)} />
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

				     	{this.state.error ? <Text>*Datos invalidos</Text> : null}

				     	<Button value="Log in" 
				     			style={{}} 
				     			font={{}}
				     			onPress={this.login.bind(this)} 
				     	/>
				     	
				    </View>
			    </View>
			</View>
			
		);
	}

}