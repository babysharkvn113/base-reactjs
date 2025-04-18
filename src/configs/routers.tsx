import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import ('@/App'));
const routers = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><App /></Suspense>
    }
]);


export default routers;