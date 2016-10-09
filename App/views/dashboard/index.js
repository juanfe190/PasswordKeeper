import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, ScrollView} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import {Router} from 'react-native-starter';
import {AndroidToolbar} from '../../../react-native-starter/index.js';
import {PasswordItem, AddPicker} from './components/mapper.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardStore from '../../src/DashboardStore.js';
import LayoutStore from '../../src/LayoutStore.js';


export default 
class DashboardView extends Component
{
	constructor(props){
		super(props);
		this.state = Object.assign(DashboardStore.getState(), {}, {addPickerAnimation: LayoutStore.getAnimationState()});
	}

	_onDashboardChange(){
		this.setState(DashboardStore.getState());
	}

	_onLayoutChange(){
		this.setState({addPickerAnimation: LayoutStore.getAnimationState()});
	}

	componentDidMount(){
	    DashboardStore.addChangeListener(()=>this._onDashboardChange);
	    LayoutStore.addChangeListener(()=>this._onLayoutChange);
	}


	componentWillUnmount(){
	    DashboardStore.removeChangeListener(()=>this.setState(DashboardStore.getState()));
	    LayoutStore.removeChangeListener(()=>this.setState({addPickerAnimation: LayoutStore.getAnimationState()}));
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
        			rightComponent={<TouchableHighlight style={{zIndex: 3}} onPress={()=>actions.isAddPickerVisible(!this.state.addPickerAnimation.isVisible)}><Icon name="add" color="white" size={30} /></TouchableHighlight>}
        			color="white"/>

				<View style={[common.clearContainer, {padding: 10}]}>
					
						<AddPicker 
							style={{
								opacity: this.state.addPickerAnimation.animator, 
								transform: [{
								    translateY: this.state.addPickerAnimation.animator.interpolate({
								       inputRange: [0, 1],
								       outputRange: [-150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
								     }),
								   }]
							}}
						/>
					<ScrollView 
						style={{height: size.fullHeight}}>
				        {this.printPasswords()}
				    </ScrollView>
			    </View>		        
		      </View>
		);
	}

}