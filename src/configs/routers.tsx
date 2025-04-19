import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import('@layouts/main.layout'));
const AuthLayout = lazy(() => import('@layouts/auth.layout'));

const DashBoardPage = lazy(() => import('@pages/dashboard.page'));
const routers = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><MainLayout /></Suspense>,
        children: [{
            path: '/',
            element: <DashBoardPage />
        }]
    }, {
        path: '/auth',
        element: <Suspense fallback={<div>loading ...</div>}><AuthLayout /></Suspense>,
        children: [
            {
                path: 'login',
                element: <DashBoardPage />
            }
        ]
    }
]);

export default routers;