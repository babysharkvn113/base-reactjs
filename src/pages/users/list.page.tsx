import LoadingComponent from "@components/loading.component";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { findAllUsers, IUser } from "src/services/user.service";

const UsersListPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["fetchUsers"],
        queryFn: findAllUsers
    });

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
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>UserName</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.users.map((user: IUser, index: number) => (
                                    <React.Fragment key={user.id}>
                                        <tr className={`${index%2 ? 'odd':'even'}`} key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                        </tr>
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