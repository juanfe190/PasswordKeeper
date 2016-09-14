import React, { Component } from 'react';
import {AppRegistry, Text, Navigator, TouchableHighlight, View} from 'react-native';
import Router from './App/core/Router.js';
import {SideMenu} from './App/core/UImanager.js';

class FirstReactApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={Router.index()}
        renderScene={this.renderSceneNavigator.bind(this)}
      />
    );
  }


  renderSceneNavigator(route, nav)
  {
    Router.setNavigator(nav);
    var Component = route.component;
    return(
      <SideMenu 
        open={this.state.isMenuOpen} 
        onClose={()=>this.setState({isMenuOpen: false})}
        router={Router}
        items={menuItems}
        _openMenu={(open)=>this.setState({isMenuOpen: open})}
      >
          <Component _openMenu={(open)=>this.setState({isMenuOpen: open})} />
      </SideMenu>
    );
  }
}

const menuItems = [
  {value: 'Home', 'route': 'index'},
  {value: 'About us', 'route': 'about'}
];

AppRegistry.registerComponent('ReactTest', () => FirstReactApp);
