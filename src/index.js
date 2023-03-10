import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './components/home/home';
import { LoginTecnico } from './components/loginTecnico/loginTecnico';
import { ResumoTecnico } from './components/loginTecnico/resumoTecnico';
import { NewRegister } from './components/osregister/NewRegister';
import { UpdateRegister } from './components/osregister/UpdateRegister';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: "/logintecnico",
        element: <LoginTecnico />
      }, {
        path: "/resumotecnico",
        element: <ResumoTecnico />
      }
      , {
        path: "/newregister",
        element: <NewRegister />
      }, {
        path: "/UpdateRegister",
        element: <UpdateRegister />
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


