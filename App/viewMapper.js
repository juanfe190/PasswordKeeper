import LoginView from './views/login/index';
import DashboardView from './views/dashboard/index';
import TemplatesView from './views/templates/index';
import Templates_AddView from './views/templates_add/index';


var mapper = [
	{name: 'index', component: LoginView},
	{name: 'dashboard', component: DashboardView},
	{name: 'templates', component: TemplatesView},
	{name: 'templates.add', component: Templates_AddView}
];
module.exports = mapper;