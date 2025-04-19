import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import('@layouts/main.layout'));
const DashBoardPage = lazy(() => import('@pages/dashboard.page'));
const routers = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<div>Loading...</div>}><MainLayout /></Suspense>,
        children: [{
            path: '/',
            element: <Suspense fallback={<div>Loading...</div>}><DashBoardPage /></Suspense>
        }]
    }
]);

export default routers;