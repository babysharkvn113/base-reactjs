import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <section className="h-screen w-full flex items-center justify-center select-none outline-none">
            <div className="w-96 h-auto bg-white flex flex-col items-start justify-start p-6 shadow-md rounded-md border border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Login</h1>
                <form className="w-full">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username:
                        </label>
                        <input type="text" id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username" />
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Password"
                        />
                        <div
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;