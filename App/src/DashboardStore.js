import {BaseStore} from '../../react-native-starter/index.js';


class DashboardStore extends BaseStore
{
	constructor(){
		super();
		this.state = {
			passwords: [
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
				{name:'Name', template: 'Test'},
			]
		}
	}

	addPassword(){
		this.setState({passwords: this.state.passwords.concat({name:'Name', template: 'Test'})});
	}

}

var dashboardStore = new DashboardStore();
export default dashboardStore;
