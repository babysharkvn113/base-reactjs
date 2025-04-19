import { appConfigs, appIcons, appImages } from "@configs/index";
import { useUIStore } from "@stores/index";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const AsidePartial = () => {
  const { asideStatus } = useUIStore();

  useEffect(() => {
    console.log(`asideStatus=${asideStatus}`);
  }, [asideStatus]);

  // Danh sách menu động
  const menuItems = [
    { title: "Dashboard", icon: appIcons.home, path: "/dashboard" },
    { title: "Products", icon: appIcons.cube, path: "/products" },
    { title: "Orders", icon: appIcons.list, path: "/orders" },
    { title: "Customers", icon: appIcons.user, path: "/customers" },
  ];

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
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={classNames(
                "cursor-pointer text-sm px-4 flex items-center border-l-2 py-2.5 duration-500 bg-gray-800 hover:border-l-blue-500",
                { "justify-start": asideStatus, "justify-center": !asideStatus }
              )}
            >
              <NavLink
                className={({ isActive }) =>
                  classNames("flex items-center gap-4", {
                    "text-white border-l-blue-500 bg-blue-900": isActive, // Khi active, đổi màu chữ và nền
                  })
                }
                to={item.path}
                title={`Go to ${item.title}`}
              >
                <span>{item.icon}</span>
                {asideStatus && <span>{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AsidePartial;
