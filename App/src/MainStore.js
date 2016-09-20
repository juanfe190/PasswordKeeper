import {BaseStore} from 'react-native-starter';

class MainStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			isMenuOpen: false
		}
	}

	isMenuOpen(args){
		this.state['isMenuOpen'] = args.value;
		this.emitChange();
	}
}

var mainStore = new MainStore();
export default mainStore;
