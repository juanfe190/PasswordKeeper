import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, InputGroup, Input, Icon, Picker, Item, Button} from 'native-base';

export default 
class AddInputView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			tipo: 0,
			title: '',
			name: '',
			maxLength: '',
			minLength: '',
			placeholder: ''
		}
	}


	setTitleAndName(title){
		var name = formalizeString(title);
		this.setState({title: title, name: name});
	}


	render()
	{
		return(
			<Container>
                <Content>
                    <List>
                    <ListItem itemDivider>
                            <Text>Ingrese los datos</Text>
                        </ListItem> 
                        <ListItem>
                            <InputGroup>
                                <Input 
                                	onChangeText={(value)=>this.setTitleAndName(value)}
                                	inlineLabel 
                                	label='Titulo' 
                                	placeholder='Nombre' />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                        	<View>
                        		<Picker
			                        iosHeader="Select one"
			                        mode="dropdown"
			                        selectedValue={this.state['type']}
                        			onValueChange={(value)=>this.setState({type: value})}>
				                        <Item label="Seleccione el tipo" value={0} />
				                        <Item label="Texto" value="string" />
				                        <Item label="Numerico" value="number" />
				                        <Item label="Telefono" value="phone" />
				                        <Item label="Email" value="email" />
			                   </Picker>	
                        	</View>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>Opcional</Text>
                        </ListItem>

                        <ListItem>
                        	<View style={{flexDirection: 'row', justifyContent: 'center'}}>
		                        <InputGroup style={{width: 150, margin: 3}} borderType='rounded'>
		                            <Input
		                            	onChangeText={(value)=>this.setState({maxLength: value})}
		                            	placeholder='Maximo' />
		                        </InputGroup>
		                        <InputGroup style={{width: 150, margin: 3}} borderType='rounded'>
		                            <Input 
		                            	onChangeText={(value)=>this.setState({minLength: value})}
		                            	placeholder='Minimo' />
		                        </InputGroup>
	                        </View>
	                    </ListItem>

	                    <ListItem>
                            <InputGroup borderType='rounded'z>
                                <Input 
                                	onChangeText={(value)=>this.setState({placeholder: value})}
                                	stackedLabel 
                                	label='Texto de ayuda' 
                                	placeholder='' />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                        	<View style={{flexDirection: 'row', justifyContent: 'center'}}>
		                        <Button danger style={{margin: 10}} onPress={this.props.onCancel}>
			                        <Icon name='ios-close' />
			                        Cancelar
			                    </Button>
		                         <Button success style={{margin: 10}} onPress={()=>this.props.onAccept(this.state)}>
			                        <Icon name='ios-checkmark' />
			                        Agregar
			                    </Button>
	                        </View>
	                    </ListItem>
                    </List>
                </Content>
            </Container>
		);
	}



}

function formalizeString(text)
{
	var text = text.toLowerCase();
	return text.replace(/ |á|Á|à|À|ä|Ä|â|Â|é|É|è|È|ë|Ë|ê|Ê|í|Í|ì|Ì|ï|Ï|î|Î|ó|Ó|ò|Ò|ö|Ö|ô|Ô|ú|Ú|ù|Ù|ü|Ü|û|Û|ñ|Ñ/gi, "-");
}