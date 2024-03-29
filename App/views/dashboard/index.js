import React, { Component } from 'react';
import {Text, TextInput, TouchableHighlight, View, ScrollView, Image} from 'react-native';
import {common, colors, size} from '../../styles/styles.js';
import actions from '../../src/actions.js';
import {Router} from 'react-native-starter';
import {AndroidToolbar, Cache} from '../../../react-native-starter/index.js';
import {PasswordItem, AddPicker} from './components/mapper.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardStore from '../../src/DashboardStore.js';
import LayoutStore from '../../src/LayoutStore.js';
import {Button} from 'native-base';

const url = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Bear_Valley,_California.jpg';

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
	    DashboardStore.addChangeListener(this._onDashboardChange.bind(this));
	    LayoutStore.addChangeListener(this._onLayoutChange.bind(this));
	}


	componentWillUnmount(){
	    DashboardStore.removeChangeListener(this._onDashboardChange.bind(this));
	    LayoutStore.removeChangeListener(this._onLayoutChange.bind(this));
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
				        <Image style={{width: 200, height: 200}} source={this.state.image || null} />
				        <Button onPress={()=>{
				        	Cache.image(url, (uri)=>this.setState({image: uri}), {forceUpdate: true, expire: 60000, onProgress: (progress)=>console.log(progress)});
				        }}>
				        	Descargar
				        </Button>
				    </ScrollView>
			    </View>		        
		      </View>
		);
	}

}