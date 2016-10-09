import React, { Component } from 'react';
import {Router, Button} from 'react-native-starter';
import {AndroidToolbar} from '../../../react-native-starter/index.js';
import {AppRegistry, Text, View, TextInput, Modal, TouchableOpacity} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import TemplateStore from '../../src/TemplateStore.js';
import {Container, Content, List, ListItem, InputGroup, Input, Icon} from 'native-base';
import {TemplateInput, AddInputView} from './components/mapper.js';

export default 
class Templates_AddView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			target: TemplateStore.findTemplate('tarjeta-de-credito'),
			//target: TemplateStore.findTemplate(this.props._params.target)
			isModalOpen: false
		};
	}


	_onChange(){
		this.setState(TemplateStore.getState());
	}
	

	componentDidMount(){
	    TemplateStore.addChangeListener(this._onChange);
	}


	componentWillUnmount(){
	    TemplateStore.removeChangeListener(this._onChange);
	}

	printInputFields(){
		return this.state.target.fields.map((item, index)=>{
			return <TemplateInput item={item} key={index} />
		});
	}

	render()
	{
		return(
        	<Container style={{backgroundColor: colors.background}}>
                <Content>

                	<Modal
			          animationType={"slide"}
			          transparent={false}
			          visible={this.state.isModalOpen}
			          onRequestClose={()=>this.setState({isModalOpen: false})}
			        >
			          <AddInputView 
			          	onCancel={()=>this.setState({isModalOpen: false})} 
			          	onAccept={(input)=>{
			          		actions.addInputField(this.state.target.name, input);
			          		this.setState({isModalOpen: false});
			          	}}
			          />
			        </Modal>

                	<AndroidToolbar 
						title="Plantillas"
						rightComponent={
							<TouchableOpacity onPress={()=>this.setState({isModalOpen: true})}>
								<Icon name="ios-add" style={{color: 'white', fontSize: 30, marginRight: 15}} />
							</TouchableOpacity>	
							}
						menuIconAction={()=>actions.isMenuOpen(true)} 
	        			style={{backgroundColor: colors.primary}} 
	        		/>

                    <List style={{marginTop: 20}}>
                        {this.printInputFields()}
                    </List>
                </Content>
            </Container>
			
		);
	}

}