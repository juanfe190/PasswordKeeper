import {AppDispatcher} from '../../react-native-starter/index.js';

export default 
class actions{

	static isMenuOpen(status){
		AppDispatcher.dispatch({
			actionType: 'isMenuOpen',
			payload: {
				value: status
			}
		});
	}


	static addPassword(){
		AppDispatcher.dispatch({
			actionType: 'addPassword',
			payload: {}
		});
	}


	static isAddPickerVisible(status){
		AppDispatcher.dispatch({
			actionType: 'isAddPickerVisible',
			payload: {
				value: status
			}
		});
	}



}