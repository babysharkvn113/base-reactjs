import {appConfigs, appImages} from "@configs/index";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const AsidePartial = () => {
  return (
    <section className="select-none">
        <div className="flex items-center justify-between border-b border-b-gray-200">
            <NavLink to="/" title="Go to dashboard" className="flex items-center justify-start gap-3 px-4 py-2">
              <img src={appImages.logo} alt={appConfigs.name} />
              <strong>{appConfigs.name}</strong>
            </NavLink>
            <FiMenu className="text-gray-700 mr-4 cursor-pointer" size="24" />
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
