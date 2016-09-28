import {BaseStore} from '../../react-native-starter/index.js';


class LayoutStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			isMenuOpen: false,
			menuItems: [
			  {value: 'Home', icon: 'home', 'route': 'index'},
			  {value: 'About us', icon: 'info-outline', 'route': 'about'}
			]
		}
	}

	isMenuOpen(payload){
		this.setState({isMenuOpen: payload.value});
	}
}

var layoutStore = new LayoutStore();
export default layoutStore;
