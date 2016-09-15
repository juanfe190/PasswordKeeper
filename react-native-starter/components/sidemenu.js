import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Drawer from 'react-native-drawer';
import MenuItem from './_sidemenu/menuitem.js';

export default 
class SideMenu extends Component
{
	constructor(props){
		super(props);
	}

	/**
	* Une el estilo default con el otorgado en la propierdad style del parent
	*
	* @author Felix Vasquez, Baum Digital
	*/
	mergeStyles(){
		var style = {
		  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#303030'},
		  main: {paddingLeft: 3},
		}

		var parentStyle = this.props.style || {};
		style['drawer'] = Object.assign(style.drawer, parentStyle);
		return style;
	}



	/**
	* En caso de existir la propiedad component, toma esta como el contenido del
	* menu, sino genera un listado generico con un array
	*
	* @author Felix Vasquez, Baum Digital
	*/
	getMenuContent(){
		if(Array.isArray(this.props.items)) return buildGenericMenuItems.call(this, this.props.items);
		else if(this.props.items instanceof Component) return this.props.items;
		else throw new Error("Error: Se esperaba un array o React Component");
	}


	render()
	{
		return(
			<Drawer
			 	type="overlay"
			 	captureGestures={false}
			 	open = {this.props.open}
			 	onClose={this.props.onClose}
				content={<View>{this.getMenuContent()}</View>}
				tapToClose={true}
				openDrawerOffset={0.2} // 20% gap on the right side of drawer
				panCloseMask={0.2}
				closedDrawerOffset={-3}
		        ref={(ref) => this._drawer = ref}
		        styles={this.mergeStyles()} >
					{this.props.children}
			</Drawer> 
		)
	}
}

function buildGenericMenuItems(items)
{
	return items.map((item, index)=>{
		return(
			<MenuItem key={index} onPress={()=>{
				this.props.itemPressed(false)
				setTimeout(()=>this.props.router.jumpTo(item.route), 300);
				
			}} text={item.value} />
		);
	});

}