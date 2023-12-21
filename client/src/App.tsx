
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
// import Logo from './components/logoFrontPage/Logo';
// import Login from './components/login/Login';
// import Signup from './components/signup/Signup';
import Home from './components/home.page/Home';


function App() {

  const router = createBrowserRouter([
    // {
    //   path:"/",
    //   element:<Logo/>,
    //   children:([
    //     {
    //       path:"/",
    //       element:<Login/>
    //     },
    //     {
    //       path:"/signup",
    //       element:<Signup/>
    //     }
    //   ])
    // }
    {
      path:"/",
      element:<Home/>
    }
  ])
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
