
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Logo from './components/logoFrontPage/Logo';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home.page/Home';
import { useSelector } from 'react-redux';
import { userDetailSlice } from './types';


function App() {
  const user = true
  const router = createBrowserRouter([
   user ?  {
      path:"/",
      element:<Home/>
    }:
    {
      path:"/",
      element:<Logo/>,
      children:([
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
      ])
    }
  ])
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
