import Home from './containers/Home/Home';
import Faqs from './containers/Faqs/Faqs';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
    name: 'Home',
    id: 1
  },
  {
    component: Faqs,
    path: '/faqs',
    exact: false,
    name: 'Faqs',
    id: 2
  }
]

export default routes;
