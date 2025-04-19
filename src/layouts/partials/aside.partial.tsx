import { appConfigs, appIcons, appImages } from "@configs/index";
import { useUIStore } from "@stores/index";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const AsidePartial = () => {
  const { asideStatus, setAsideStatus } = useUIStore();
  const toggleAside = () => {
    setAsideStatus(!asideStatus);
  }

  useEffect(() => {
    console.log(`asideStatus=${asideStatus}`);
  }, [asideStatus]);
  return (
    <section className="select-none outline-none">
      <div className="flex items-center justify-between border-b border-b-gray-200">
        <NavLink to="/" title="Go to dashboard" className="flex items-center justify-start gap-3 px-4 py-2">
          <img src={appImages.logo} alt={appConfigs.name} />
          <strong>{appConfigs.name}</strong>
        </NavLink>
        <span onClick={toggleAside}>{appIcons.menu}</span>
      </div>
      <div className="px-4 mt-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident esse
          vitae tempora, repellat ipsam quasi
          voluptatem minima. Mollitia reiciendis aspernatur ex doloribus culpa,
          pariatur obcaecati in asperiores recusandae, nam accusantium.</p>
      </div>

    </section>
  )
}

export default AsidePartial
