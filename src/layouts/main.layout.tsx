import { Outlet } from "react-router-dom"
import {HeaderPartial} from "@layouts/partials"

const MainLayout = () => {
  return (
    <div>
      <HeaderPartial />
      <Outlet />
    </div>
  )
}

export default MainLayout