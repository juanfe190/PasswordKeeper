import React, { Component } from 'react';
import {AppRegistry, Navigator} from 'react-native';
import {Router} from 'react-native-starter';
import {SideMenu} from './react-native-starter/index.js';
import LayoutStore from './App/src/LayoutStore.js';
import mapper from './App/viewMapper.js';
import actions from './App/src/actions.js';

class FirstReactApp extends Component {

  constructor(props){
    super(props);
    Router.register(mapper);
    this.state = LayoutStore.getState();
  }

  componentWillMount(){
    LayoutStore.addChangeListener(()=>this.setState(LayoutStore.getState()));
  }


  componentWillUnmount(){
    LayoutStore.removeChangeListener(()=>this.setState(LayoutStore.getState()));
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
        opened={this.state.isMenuOpen}
        items={this.state.menuItems}
        itemPressed={(item)=>{
          actions.isMenuOpen(false);
          setTimeout(()=>Router.jumpTo(item.route),300);
          
        }}
      >
          <Component _params={route._params} />
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('ReactTest', () => FirstReactApp);
