import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <h1>about</h1> },
      { path: '/shop', element: <h1>shop</h1> },
      { path: '/about', element: <h1>about</h1> },
      { path: '/contact', element: <h1>contact</h1> },
      { path: '/product', element: <h1>contact</h1> },
    ],
  },
]);
