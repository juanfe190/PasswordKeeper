import {Animated} from 'react-native';
import {BaseStore} from '../../react-native-starter/index.js';


class LayoutStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			isMenuOpen: false,
			menuItems: [
			  {value: 'Home', icon: 'home', 'route': 'index'},
			  {value: 'Plantillas', icon: 'color-lens', 'route': 'templates'},
			],

			addPickerAnimation: {
				animator: new Animated.Value(0),
				isVisible: false
			}
		}
	}

	isAddPickerVisible(payload){
		Animated.timing(          
	       this.state.addPickerAnimation.animator,    
	       {toValue: payload.value == true ? 1 : 0,
	       	duration: 700}            
	     ).start();

		this.state.addPickerAnimation['isVisible'] = payload.value;
		this.emitChange();
	}

	getAnimationState(){
		return this.state.addPickerAnimation;
	}

	isMenuOpen(payload){
		this.setState({isMenuOpen: payload.value});
	}
}

var layoutStore = new LayoutStore();
export default layoutStore;
