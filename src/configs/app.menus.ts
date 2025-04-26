import appIcons from "./app.icons";
interface IMenuItem{
    title: string,
    icon: React.ReactNode,
    path: string,
    children?: IMenuItem[]
}
const appMenuItems = [
    { title: "Dashboard", 
        icon: appIcons.home, 
        path: "/dashboard" 
    },
    { 
        title: "Products", 
        icon: appIcons.cube, 
        path: "/products" 
    },
    { 
        title: "Orders", 
        icon: appIcons.list, 
        path: "/orders" 
    },
    {
        title: "Admin Users",
        icon: appIcons.group,
        path:"/users",
        children: [
            {
                title: "Add New",
                icon: appIcons.plus,
                path: "/add-user"
            }
        ]
    },
    { 
        title: "Customers", 
        icon: appIcons.user,
         path: "/customers" 
    },
] as IMenuItem[];

export default appMenuItems;