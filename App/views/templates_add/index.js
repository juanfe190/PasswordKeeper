import React, { Component } from 'react';
import {Router, Button} from 'react-native-starter';
import {AndroidToolbar} from '../../../react-native-starter/index.js';
import {AppRegistry, Text, View, TextInput, ScrollView} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import TemplateStore from '../../src/TemplateStore.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default 
class Templates_AddView extends Component
{
	constructor(props){
		super(props);
		this.state = {
			target: TemplateStore.findTemplate(this.props._params.target)
		};
	}
	

	componentWillMount(){
	    TemplateStore.addChangeListener(()=>this.setState(TemplateStore.getState()));
	}


	componentWillUnmount(){
	    TemplateStore.removeChangeListener(()=>this.setState(TemplateStore.getState()));
	}

	printInputFields(){
		return this.state.target.fields.map((item, index)=>{
			return(
				<TextInput 
		        	style={[common.txtinput, {width: 300}]}
		        	secureTextEntry={item.secureTextEntry || false}
		        	placeholder={item.options.placeholder || item.title}

		        />
			)
		});
	}

	render()
	{
		return(
			<View style={{flex: 1}}>
				
				<AndroidToolbar 
					title="Plantillas"
					menuIconAction={()=>actions.isMenuOpen(true)} 
        			style={{backgroundColor: colors.primary}}
        			rightComponent={<Icon name="add" color="white" size={30} color="white" />} />

				<View style={[common.clearContainer, {padding: 10, alignItems: 'center'}]}>

					<ScrollView 
						style={{height: size.fullHeight}}>
				        {this.printInputFields()}
				    </ScrollView>
			    </View>		
			</View>
			
		);
	}

}