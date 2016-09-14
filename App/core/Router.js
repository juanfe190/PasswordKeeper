import mapper from '../viewMapper.js';
import {
	ViewExceptions
} from './exceptions/RouterExceptions.js';

export default
class Router
{
	static setNavigator(nav)
	{
		navigator = nav;
	}


	static index()
	{
		return findView('index');
	}

	static all()
	{
		return mapper;
	}



	/**
	* Monta view previamente registrada en el navigator sin desmontar
	* el view, adicionalmente si el view no se encuentra en el stack lo agrega
	*/
	static jumpTo(name)
	{
		if(viewNotInStack(name)) return this.openView(name);

		view = findView(name);
		navigator.jumpTo(view);
	}


	/**
	* Crea o reinicia un view del stack, si el view ya se encuentra en el stack
	* se perdería la informacion existente
	*/
	static openView(name)
	{
		view = findView(name);
		navigator.push(view);
	}


	/**
	* Retorna al view anterior sin desmontar el actual
	*/
	static jumpBack()
	{
		navigator.jumpBack();
	}	



	/**
	* Regresa al view anterior desmontando el actual
	*/
	static closeView()
	{
		navigator.pop();
	}
}

/**
* Busca un view en el mapper
*
* @author Felix Vasquez, Baum Digital
*/
function findView(name)
{
	var view = mapper.find(function(obj){
		return obj.name === name
	});
	
	if(typeof view == 'undefined') throw new ViewExceptions(`La vista especificada ('${name}') no se encuentra registrada en el mapper.`);
	return view;
}


/**
* Verifica si un view no se encuentra en el stack
*
* @author Felix Vasquez, Baum Digital
*/
function viewNotInStack(name)
{
	var view = navigator.getCurrentRoutes().find(function(obj){
		return obj.name === name
	});

	return typeof view === 'undefined';
}

var navigator;