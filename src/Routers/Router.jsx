
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
