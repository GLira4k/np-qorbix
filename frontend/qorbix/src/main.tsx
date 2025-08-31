import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginRegister from './pages/LoginRegister.tsx'
import App from './pages/App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginRegister />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
