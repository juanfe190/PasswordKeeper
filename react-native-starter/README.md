----------
# React Native Starter Kit

####Routing + Sidemenu + Flux + Images and Data Cache
A package that brings the basic functionality needed to build a React Native application. It helps you with the routing of your applications, a simple way to build a sidemenu, manages your state with flux and gives you a super easy way to cache images and data.
# Contents

-	[What is included?](##what-is-included)
-	[Routing](#testimonials)

##What is inclueded

 - Routing
	 - A simple class to move around your application, you just have to register your view Object and you are good to go.
 - Sidemenu
	 - Simplified [Drawer](https://github.com/root-two/react-native-drawer) to be used as a sidemenu in all your applications.
 - Flux
	 - React Native Starter Kit comes with Flux implemented, to create your stores you only need to extend from our **BaseStore** and make all the actions you need.
 - Cache
	 - I know how necessary it is for an application to use local cache and avoid multiple REST requests or to download images and store them locally to boost performance. So I built a really easy to use **CacheService** to help you out.

##Routing
Its really easy to use the routing system, you need to use Navigator component from react native and make a mapper object to register your routes:

    import React, { Component } from 'react';
    import {AppRegistry, Navigator} from 'react-native';
    import {Router} from 'react-native-starter';
	
	import LoginView from './views/LoginView';
	import HomeView from './views/HomeView';
	const mapper = [
		{name: 'index', component: LoginView},
		{name: 'home', component: HomeView},
	];
	
    class FirstReactApp extends Component {
      constructor(props){
		super(props);
		Router.register(mapper);
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
        const Component = route.component;
        return(
              <Component _params={route._params} />
        );
      }
    }
    
    AppRegistry.registerComponent('ReactTest', () => FirstReactApp);

####**Methods**
**static register(MapperArray)**
Call this function on the constructor of your index file, it is an array of objects containing your routes. Each object must have two key: 'name' and 'component'
 
 ***params:***

 - Array:
	 - Object:
		 - name: Name you will use when you want to move to this view, there is only one reserved name and it is 'index', the view registerd as 'index' will be your initial view.
		 - component: React Native Component to render

----------


**static setNavigator(Navigator nav)**
Updates the current state of your navigator, you must pass the second argument retorned in the *renderScene* funcion of the Navigator component


----------


**static index()**
Returns the index component


----------


**static openView(String name, Object params)**
Opens a new view, if the view was already registered in the stack it will replace it and any state will be reset.
The *params* object wil be used to pass parameters to the view.


----------


**static jumpTo(String name, Object params)**
Moves to a view previously added to the stack, if the view is not in the stack(was never open) it will be opened and added. This is the best option to move to a view. The current state of the view will not be reset.


