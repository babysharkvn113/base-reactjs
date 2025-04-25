import { Outlet } from "react-router-dom";
import { FooterPartial } from "./partials";

const AuthLayout = () => {
    return (
        <>
        <main className="bg-gray-100"><Outlet /></main>
        <FooterPartial isLoginEnabled={false} />
        </>
    )
}

export default AuthLayout;