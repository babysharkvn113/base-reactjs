import appIcons from "@configs/app.icons";
import useUIStore from "@stores/ui.store"
const HeaderPartial = () => {
  const { asideStatus, setAsideStatus } = useUIStore();
  const toggleAside = () => {
    setAsideStatus(!asideStatus);
  }
  return (
    <header className={`bg-sky-700/70 text-white px-4 py-3 ${asideStatus ? 'sm:ml-64': 'sm:ml-12'} h-[50px]`}>
      <span className="text-white h-full flex items-center justify-start" onClick={toggleAside}>{appIcons.menu}</span>
    </header>
  )
}

export default HeaderPartial