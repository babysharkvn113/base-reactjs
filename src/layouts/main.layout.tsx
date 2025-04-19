import { Outlet } from "react-router-dom"
import { HeaderPartial, FooterPartial } from "@layouts/partials"
import AsidePartial from "./partials/aside.partial"
import useUIStore from "@stores/ui.store"

const MainLayout = () => {
  const { asideStatus } = useUIStore();
  return (
    <>
      <HeaderPartial />
      <section>
        <aside className={
          `bg-gray-100 fixed top-0 left-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40,
          ${asideStatus ? 'w-64' : 'w-12'}`
        }>
          <AsidePartial />
        </aside>
        <main className={`bg-sky-200 p-4 ${asideStatus ? 'sm:pl-68': 'sm:pl-16'}`}>
          <Outlet />
        </main>
      </section>
      <FooterPartial />
    </>
  )
}

export default MainLayout