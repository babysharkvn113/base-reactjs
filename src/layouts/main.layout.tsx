import { Outlet } from "react-router-dom"
import { HeaderPartial, FooterPartial } from "@layouts/partials"
import AsidePartial from "./partials/aside.partial"
import useUIStore from "@stores/ui.store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();
const MainLayout = () => {
  const { asideStatus } = useUIStore();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeaderPartial />
        <section>
          <aside className={
            `bg-gray-100 fixed top-0 left-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40,
            ${asideStatus ? 'w-64' : 'w-12'}`
          }>
            <AsidePartial />
          </aside>
          <main className={`p-4 ${asideStatus ? 'sm:pl-68' : 'sm:pl-16'}`}>
            <Outlet />
          </main>
        </section>
        <FooterPartial />
      </QueryClientProvider>
    </>
  )
}

export default MainLayout