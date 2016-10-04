import React, { Component } from 'react';
import {Router, Button} from 'react-native-starter';
import {AppRegistry, Text, View, TextInput} from 'react-native';
import {common, colors} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import LayoutStore from '../../src/LayoutStore.js';

export default 
class LoginView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			password: '',
			error: false
		}
	}
	

	login()
	{
		Router.jumpTo('dashboard');
	}

	render()
	{
		return(
			<View style={{flex: 1}}>
							
				<View style={common.container}>
					<View style={{alignItems: 'center'}}>
				        <Text style={common.title}>
				          Log in
				        </Text>

				        <TextInput 
				        	onChangeText={(value)=>this.setState({password: value})} 
				        	style={[common.txtinput, {width: 200}]}
				        	value={this.state.password}
				        	secureTextEntry={true}
				        	placeholder='Password'

				        />

				     	{this.state.error ? <Text style={{color: colors.danger}}>Wrong password</Text> : null}

				     	<Button value="Log in" style={{backgroundColor: colors.primary}} onPress={this.login.bind(this)} 
				     	/>
				     	
				    </View>
			    </View>
			</View>
			
		);
	}

}