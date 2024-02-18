
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Main from '../Layout/Main';

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
