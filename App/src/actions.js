import AppDispatcher from '../core/FluxDispatcher.js';

export default 
class actions{

	static log(msg){
		AppDispatcher.dispatch({
			actionType: 'log',
			message: msg
		});
	}

}