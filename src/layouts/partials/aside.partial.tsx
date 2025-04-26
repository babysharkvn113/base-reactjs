import { appConfigs, appMenuItems, appImages } from "@configs/index";
import { useUIStore } from "@stores/index";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const AsidePartial = () => {
  const { asideStatus } = useUIStore();
  return (
    <aside className="select-none outline-none w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-center bg-sky-700/90 text-white border-b border-sky-700 h-[50px]">
        <NavLink
          to="/"
          title="Go to dashboard"
          className={classNames("flex items-center gap-3 py-2", {
            "justify-start px-4": asideStatus,
            "justify-center": !asideStatus,
          })}
        >
          <img src={appImages.logo} alt={appConfigs.name} width={24} height={24} />
          {asideStatus && <strong>{appConfigs.name}</strong>}
        </NavLink>
      </div>

      {/* Sidebar Menu */}
      <nav className="bg-gray-900 h-full text-gray-400 text-base py-4">
        <ul className="text-base leading-base">
          {appMenuItems.map((item, index:number) => (
            <li
              key={index}
              className={`cursor-pointer text-sm flex items-start justify-start flex flex-col w-full`}
            >
              <NavLink
                className={`flex items-center px-4 gap-4 py-2.5 border-l-3 border-l-transparent duration-500 hover:border-l-blue-500`}
                to={item.path}
                title={`Go to ${item.title}`}
              >
                <span>{item.icon}</span>
                {asideStatus && <span>{item.title}</span>}
              </NavLink>
              {
                item.children && (
                  <ul className="bg-gray-500/50 w-full">
                    {item.children.map((childItem, childIndex:number) => (
                      <li key={`child-${childIndex}`}>
                        <NavLink
                          className={`flex text-sm items-center px-4 gap-4 py-2 border-l-3 duration-500 border-l-transparent hover:border-l-blue-500`}
                          to={childItem.path}
                          title={`Go to ${childItem.title}`}
                        >
                          <span>{childItem.icon}</span>
                          {asideStatus && <span>{childItem.title}</span>}
                        </NavLink>
                      </li>
                    ))
                    }

                  </ul>
                )
              }
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AsidePartial;
