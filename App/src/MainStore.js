import AppDispatcher from '../core/FluxDispatcher.js';
import {EventEmitter} from 'events';

const ChangeEvent = 'change';
var MainStore = Object.assign({}, EventEmitter.prototype,{
	addChangeListener: function(callback){
		this.on(ChangeEvent, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(callback);
	},
	emitChange: function(){
		this.emit(ChangeEvent);
	},

	getState: function(){
		//return data;
	}
});


/**************************************
************ DISPATCHER ***************
***************************************/
AppDispatcher.register(function(action){
	switch(action.actionType){
		case 'log':
			console.log(action.msg);
			MainStore.emitChange();
			break;
	}
});

export default MainStore;
