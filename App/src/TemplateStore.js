import {BaseStore} from '../../react-native-starter/index.js';


class TemplateStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			templates: [
				{title: 'Tarjeta de Credito', icon: 'credit-card', name: 'tarjeta-de-credito', fields:[
					{title: 'Nombre', name: 'name', type: 'string', options: {
						maxLenght: 25,
						minLenght: 5,
						placeholder: 'Nombre en la tarjeta'
					}},

					{title: 'Number', name: 'creditCardNumber', type: 'number', options: {
						maxLenght: 14,
						minLenght: 14,
						placeholder: '55555 55555 55555 5555'
					}},
				]}
			]
		}
	}


	findTemplate(name){
		var item = this.state.templates.filter((item, index)=>{
			return item.name === name
		})

		return item[0];
	}

}

var templateStore = new TemplateStore();
export default templateStore;
