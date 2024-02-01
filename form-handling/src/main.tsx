import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <App /> 
    </div>,
  },
  {
    path: "/Login",
    element: 
    <div>
      <Login /> 
    </div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
