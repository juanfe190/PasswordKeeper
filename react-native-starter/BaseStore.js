import AppDispatcher from './FluxDispatcher.js';
import {EventEmitter} from 'events';

const ChangeEvent = 'change';

export default
class BaseStore extends EventEmitter
{
	constructor(){
		super();
		AppDispatcher.register((action)=>{
			if(typeof this[action.actionType] !== 'function') throw new Error("Funcion no registrada en el store: " + action.actionType);
			this[action.actionType](action.args); 
		});
	}

	addChangeListener(callback){
		this.on(ChangeEvent, callback);
	}

	removeChangeListener(callback){
		this.removeListener(callback);
	}

	emitChange(){
		this.emit(ChangeEvent);
	}

	getState(){
		return this.state;
	}
}