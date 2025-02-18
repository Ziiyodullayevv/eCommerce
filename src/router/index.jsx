import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import NotFound from '../components/NotFound';
import Shop from '../components/Shop';
import Blog from '../components/Contact';
import ProductPage from './../components/Product';
import About from '../components/About';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Blog /> },
      { path: '/product', element: <ProductPage /> },
      // { path: '/product/:id', element: <h1>productId</h1> },
    ],
  },
]);
