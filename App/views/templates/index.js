import React, { Component } from 'react';
import {AndroidToolbar, Router, Button} from '../../../react-native-starter/index.js';
import {AppRegistry, Text, View, TextInput, ScrollView} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import TemplateStore from '../../src/TemplateStore.js';
import {TemplateItem} from './components/mapper.js';

export default 
class TemplatesView extends Component
{
	constructor(props){
		super(props);
		this.state = TemplateStore.getState();
	}


	_onChange(){
		this.setState(TemplateStore.getState());
	}
	

	componentDidMount(){
	    TemplateStore.addChangeListener(this._onChange.bind(this));
	}


	componentWillUnmount(){
	    TemplateStore.removeChangeListener(this._onChange.bind(this));
	}

	printTemplates(){
		return this.state.templates.map((item, index)=>{
			return <TemplateItem target={item.name} title={item.title} onPress={()=>Router.jumpTo('templates.add', {target: item.name})} icon={item.icon} key={index} />;
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
        			color="white"/>

				<View style={[common.clearContainer, {padding: 10}]}>
					<ScrollView 
						style={{height: size.fullHeight}}>
				        {this.printTemplates()}
				    </ScrollView>
			    </View>		
			</View>
			
		);
	}

}