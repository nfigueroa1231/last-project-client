import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

function LoginPage() {
  const [thisUser, setThisUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setThisUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    post("/auth/login", thisUser)
      .then((response) => {
        console.log("Login response ===>", response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center">
          <div className="max-w-sm mb-16 lg:mb-0 lg:max-w-2xl lg:w-1/2 lg:px-4">
            <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-2xl font-black leading-none text-gray-500 select-none">ExpressPay</span>
            </Link>
            <h1 className="mb-4 text-4xl font-bold leading-none">Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <label className="block mb-2 text-gray-600">Email:</label>
              <input
                type="email"
                name="email"
                value={thisUser.email}
                onChange={handleTextChange}
                className="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
              />
              <label className="block mb-2 text-gray-600">Password:</label>
              <input
                type="password"
                name="password"
                value={thisUser.password}
                onChange={handleTextChange}
                className="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-sm hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
              >
                Login
              </button>
            </form>
            {errorMessage && <p className="mt-4 text-xs text-red-500">{errorMessage}</p>}
            <p className="mt-4 text-gray-600">
              Don't have an account yet? <Link to="/signup" className="text-indigo-600">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
