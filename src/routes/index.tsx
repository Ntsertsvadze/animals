import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AnimalsPage from '../pages/AnimalsPage';
import CategoryPage from '../pages/CategoryPage';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/animals',
    element: <AnimalsPage />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  }
];

export default routes;

