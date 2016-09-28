import LoginView from './views/login/index';
import DashboardView from './views/dashboard/index';


var mapper = [
	{name: 'index', component: LoginView},
	{name: 'dashboard', component: DashboardView}
];
module.exports = mapper;