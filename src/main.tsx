
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import routers from '@configs/routers';
import '@assets/css/global.css';
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers}/>
)
