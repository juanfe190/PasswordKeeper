import {BaseStore} from '../../react-native-starter/index.js';


class TemplateStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			templates: [
				{title: 'Tarjeta de Credito', icon: 'credit-card', name: 'tarjeta-de-credito', fields:[
					{title: 'Nombre', name: 'name', type: 'string', options: {
						maxLength: 50,
						minLength: 5,
						placeholder: 'Nombre en la tarjeta'
					}},

					{title: 'Number', name: 'creditCardNumber', type: 'number', options: {
						maxLength: 14,
						minLength: 14,
						placeholder: '55555 55555 55555 5555'
					}},
				]}
			]
		}
	}



	addInputField(payload){
		var template = this.findTemplate(payload.template);
		template.fields.push( formatFieldObject(payload.input) );

		var templates = this.state.templates;
		templates[ this.foundTemplateIndex ] = template;

		this.setState({templates: templates});
	}


	findTemplate(name){
		var item = this.state.templates.find((item, index)=>{
			if(item.name == name){
				this.foundTemplateIndex = index;
				return true;
			}
		})

		return item;
	}

}


function formatFieldObject(input){
	return {
		title: input.title,
		name: input.name,
		type: input.type,
		options:{
			maxLength: input.maxLength,
			minLength: input.minLength,
			placeholder: input.placeholder
		}
	}
}

var templateStore = new TemplateStore();
export default templateStore;
