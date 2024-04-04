import { useState } from 'react';
import { post } from '../services/authService';

const MiLuma = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [userInfo, setUserInfo] = useState(null);

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // guardar el username y el password en Provider
        post('/providers', user)
            .then((response) => {
                console.log('saving user data', response.data);
                setUserInfo(response.data);
            })
            .catch((err) => {
                console.log('Error saving user data', err);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Credentials of LUMA</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleTextChange}
                            value={user.username}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleTextChange}
                            value={user.password}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="relative bg-black px-20 py-3 rounded mt-4 overflow-hidden">
                        <span className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
                            Log in
                        </span>
                        </button>
                        {userInfo && <h1 className="text-green-500">We have user info.</h1>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MiLuma;
