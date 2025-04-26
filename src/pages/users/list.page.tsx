import LoadingComponent from "@components/loading.component";
import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import { FiEye, FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { findAllUsers, IUser } from "src/services/user.service";

const UsersListPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["fetchUsers"],
        queryFn: findAllUsers
    });

    const [selectedItem, setSelectedItem] = useState<IUser|null>(null);


    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h2><span>List All Users</span></h2>
                        </div>
                        <ul className="tools">
                            <li>
                                <NavLink 
                                className={
                                    `flex items-center justify start gap-1.5 px-3 py-1.5 
                                    text-sm font-semibold text-white bg-sky-700 rounded-sm
                                    duration-500 hover:bg-sky-700/80 hover:shadow hover:rounded-none cursor-pointer`
                                } 
                                to={'/add-user'} 
                                title="Add new user">
                                    <FiPlus size={16} />
                                    Add New
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {isLoading && (
                            <LoadingComponent size={30} />
                        )}
                        <table className="w-full table-data">
                            <thead>
                                <tr>
                                    <th className="w-10">Id</th>
                                    <th>Email</th>
                                    <th>UserName</th>
                                    <th className="w-20">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.users.map((user: IUser, index: number) => (
                                    <React.Fragment key={user.id}>
                                        <tr className={`${index%2 ? 'odd':'even'}`} key={user.id}>
                                            <td className="text-center">{`${++index}`}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span onClick={() => setSelectedItem(user)}>
                                                        <FiEye size={20} className="text-green-500 cursor-pointer" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        {selectedItem?.id === user.id && (
                                            <tr className="exp">
                                                <td colSpan={4}>
                                                    <div className="exp-detail">
                                                        <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                                                            Its purpose is to permit a page layout to be ...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className="col-span4">
                b
            </div>
        </div >
    )
}

export default UsersListPage;