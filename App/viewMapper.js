import LoginView from './views/home/index';
import AboutView from './views/about/index';
import MenuSample from './views/menu/index';


var mapper = [
	{name: 'index', component: LoginView},
	{name: 'about', component: AboutView},
	{name: 'menu', component: MenuSample}
];
module.exports = mapper;