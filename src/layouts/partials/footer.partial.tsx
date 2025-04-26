import { appConfigs, appIcons } from "@configs/index"
import useUIStore from "@stores/ui.store"
import { NavLink } from "react-router-dom"

const FooterPartial = ({ isLoginEnabled = true }: { isLoginEnabled?: boolean }) => {
  const {asideStatus} = useUIStore();
  return (
    <footer className={
      `bg-gray-100 fixed bottom-0 text-sm leading-sm flex 
      ${asideStatus ? 'left-64 w-[calc(100%-theme(width.64))]':'left-12 w-[calc(100%-theme(width.16))]'}`
    }>
      <div className="flex  items-center justify-between w-full px-4 py-2 text-sm select-none">
        <div id="copyright">
          <span className="italic">&copy; {(new Date()).getFullYear()} from&nbsp;
            <a className="hover:text-sky-500 border-b border-b-transparent hover:border-sky-500" href={appConfigs.authorUrl} target="_blank">agency.io.vn</a>
          </span>
        </div>
        <div className="footer-tools-bar">
          <ul >
            {isLoginEnabled && (
              <li>
                <NavLink to={'/logout'} title="Logout" className="flex items-center justify-end gap-2">
                  {appIcons.logout}
                  <span className="text-tiny">Logout</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterPartial
