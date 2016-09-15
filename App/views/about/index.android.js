import React, { Component } from 'react';
import {
	AppRegistry, 
	Text, 
	TextInput,
	TouchableHighlight, 
	StyleSheet, 
	View} from 'react-native';

import {common} from '../../styles/styles.js';
import {Button, Router} from 'react-native-starter';

export default 
class AboutView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			txtInput: ''
		}
	}

	render()
	{
		return(
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          Sobre nosotros
		        </Text>
		        <Text style={styles.instructions}>
		          Empresa dedicada al desarrollo y a la innovacion
		        </Text>

		        <TextInput 
		        	onChangeText={(value)=>this.setState({txtInput: value})} 
		        	style={styles.txtinput}
		        />

		        <Button value="Open menu" 
			     			style={{}} 
			     			font={{}}
			     			onPress={()=>this.props.isMenuOpen(true)}/>

		        <Button onPress={()=>Router.jumpBack()} value="Regresar" />

		     	<Button onPress={()=>Router.closeView()} value="Cerrar" />
		      </View>
		);
	}



}

	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
	  welcome: {
	    fontSize: 20,
	    textAlign: 'center',
	    margin: 10,
	  },
	  instructions: {
	    textAlign: 'center',
	    color: '#333333',
	    marginBottom: 5,
	  },

	  txtinput: {
	  	width: 150
	  }
	});