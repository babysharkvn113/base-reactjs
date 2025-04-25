import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("@layouts/main.layout"));
const AuthLayout = lazy(() => import("@layouts/auth.layout"));

const DashBoardPage = lazy(() => import("@pages/home/dashboard.page"));
const UsersListPage = lazy(() => import("@pages/users/list.page"));
const AddUserPage = lazy(() => import("@pages/users/add.page"));
const MediaListPage = lazy(() => import("@pages/medias/mediaList.page"));
const LoginPage = lazy(() => import("@pages/auth/login.page"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <DashBoardPage /> },
      {
        path: "users",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersListPage />
          </Suspense>
        ),
      },
      {
        path: "add-user", 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddUserPage />
          </Suspense>
        ),
      },
      {
        path: "media",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MediaListPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<div>loading ...</div>}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routers;
