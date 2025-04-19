
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import '@assets/css/global.css';
import { routers } from '@configs/index';
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />
)
