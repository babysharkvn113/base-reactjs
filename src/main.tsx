
import { createRoot } from 'react-dom/client'
import '@/assets/css/global.css';
import { RouterProvider } from 'react-router-dom';
import routers from '@configs/routers';
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers}/>
)
