import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import {Router} from 'react-native-starter';
import {SideMenu} from './react-native-starter/index.js';
import MainStore from './App/src/MainStore.js';


import LoginView from './App/views/home/index';
import AboutView from './App/views/about/index';
import MenuSample from './App/views/menu/index';


var mapper = [
  {name: 'index', component: LoginView},
  {name: 'about', component: AboutView},
  {name: 'menu', component: MenuSample}
];

class FirstReactApp extends Component {

  constructor(props){
    super(props);
    Router.register(mapper);
    this.state = MainStore.getState();
  }

  componentWillMount(){
    MainStore.addChangeListener(()=>this.setState(MainStore.getState()));
  }


  componentWillUnmount(){
    MainStore.removeChangeListener(()=>this.setState(MainStore.getState()));
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
        router={Router}
        items={menuItems}
        itemPressed={(opened)=>this.setState({isMenuOpen: opened})}
      >
          <Component />
      </SideMenu>
    );
  }
}

const menuItems = [
  {value: 'Home', icon: 'home', 'route': 'index'},
  {value: 'About us', icon: 'info-outline', 'route': 'about'}
];

AppRegistry.registerComponent('ReactTest', () => FirstReactApp);
