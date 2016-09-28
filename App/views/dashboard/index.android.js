import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, ScrollView} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import {Button, Router} from 'react-native-starter';
import {AndroidToolbar} from '../../../react-native-starter/index.js';
import {PasswordItem} from './components/mapper.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardStore from '../../src/DashboardStore.js';


export default 
class DashboardView extends Component
{
	constructor(props){
		super(props);
		this.state = DashboardStore.getState();
	}


	componentWillMount(){
	    DashboardStore.addChangeListener(()=>this.setState(DashboardStore.getState()));
	}


	componentWillUnmount(){
	    DashboardStore.removeChangeListener(()=>this.setState(DashboardStore.getState()));
	}

	printPasswords(){
		return this.state.passwords.map((item, index)=>{
			return <PasswordItem template={item.template} name={item.name} key={index} />;
		});
	}

	render()
	{
		return(
			<View style={{flex: 1}}>
				<AndroidToolbar 
					title="Dashboard"
					menuIconAction={()=>actions.isMenuOpen(true)} 
        			style={{backgroundColor: colors.primary}} 
        			rightComponent={<Icon name="add" color="white" size={30} onPress={()=>actions.addPassword()} />}
        			color="white"/>

				<View style={[common.clearContainer, {padding: 10}]}>
					<ScrollView style={{height: size.fullHeight}}>
				        {this.printPasswords()}
				    </ScrollView>
			    </View>		        
		      </View>
		);
	}

}