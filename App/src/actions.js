import {AppDispatcher} from 'react-native-starter';

export default 
class actions{

	static isMenuOpen(status){
		AppDispatcher.dispatch({
			actionType: 'isMenuOpen',
			args: {
				value: status
			}
		});
	}

}