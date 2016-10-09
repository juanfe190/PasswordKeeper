import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native';
import {ListItem, InputGroup, Input, Icon} from 'native-base';

export default 
class TemplateInput extends Component
{
	constructor(props){
		super(props);
	}

	getInputType(){
		switch(this.props.item.type){
			case 'string':
				return 'default';

			case 'number':
				return 'numeric';

			case 'email':
				return 'email-address';

			case 'phone':
				return 'phone-pad';

			default:
				return 'default';
		}
	}

	render()
	{
		return(
			<ListItem>
                <InputGroup style={{marginBottom: 10}}>
                    <Input
                    	keyboardType={this.getInputType()}
                    	secureTextEntry={this.props.item.secureTextEntry || false}
                    	placeholder={this.props.item.options.placeholder || this.props.item.title} />
                </InputGroup>
            </ListItem>
		);
	}



}