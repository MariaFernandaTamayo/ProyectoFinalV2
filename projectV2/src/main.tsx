//main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'; // Aquí ya tienes un archivo CSS enlazado
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './routes/Signup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Login from './routes/Login.tsx';
import Protection from './routes/Protection.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Protection />,
    children:[
      {
        path : "/dashboard",
        element : <Dashboard />,
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
