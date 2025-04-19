import { Outlet } from "react-router-dom"
import { HeaderPartial, FooterPartial } from "@layouts/partials"
import AsidePartial from "./partials/aside.partial"

const MainLayout = () => {
  return (
    <>
      <HeaderPartial />
      <section>
        <aside className="bg-gray-50 fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
          <AsidePartial />
        </aside>
        <main className="bg-sky-200 p-4 sm:ml-64">
          <Outlet />
        </main>
      </section>
      <FooterPartial />
    </>
  )
}

export default MainLayout