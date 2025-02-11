import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './interface/store';
import routes from './routes/index';
import Header from './pages/Header';

const App: React.FC = () => {
  return (
    <Provider store={store}>
 
        <Header />
        <RouterProvider router={createBrowserRouter(routes)} />
     
    </Provider>
  );
};

export default App;
