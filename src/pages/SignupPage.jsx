import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import Button from "../componentes/Button";
import ProfileUser from "./ProfileUser"; 

function SignupPage() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    lastName: ""
  });

  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    post("/auth/signup", newUser)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setNewUser({
          email: "",
          password: "",
          name: "",
          lastName: ""
        });
      });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center">
          <div className="max-w-sm mb-16 lg:mb-0 lg:max-w-2xl lg:w-1/2 lg:px-4">
            <Link
              to="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-start md:mb-0"
            >
              <span className="mx-auto text-2xl font-black leading-none text-gray-500 select-none">
                ExpressPay
              </span>
            </Link>
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
              Signup today and we will autopay you're bills.
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="overflow-hidden text-center bg-white rounded-md shadow-sm">
                <div className="px-6 py-8">
                  <ProfileUser newUser={newUser} /> {/* ProfileUser/////////////////////// */}

                  <form onSubmit={handleSignupSubmit} className="">
                    <div className="mb-6">
                      <span className="text-sm text-gray-300">
                        Fill out your info below to
                      </span>
                      <h4 className="text-2xl font-semibold text-gray-700">
                        Create your account
                      </h4>
                    </div>
                    <div className="flex flex-wrap mb-4 -mx-2">
                      <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                        <input
                          className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
                          type="text"
                          placeholder="First Name"
                          name="name"
                          value={newUser.name}
                          onChange={handleTextChange}
                        />
                      </div>
                      <div className="w-full px-2 lg:w-1/2">
                        <input
                          className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={newUser.lastName}
                          onChange={handleTextChange}
                        />
                      </div>
                    </div>
                    <input
                      className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={newUser.email}
                      onChange={handleTextChange}
                    />
                    <input
                      className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={newUser.password}
                      onChange={handleTextChange}
                    />
                    <Button title={"Sign Up"} type={"submit"} />
                  </form>

                  {errorMessage && (
                    <p className="text-xs text-gray-400">{errorMessage}</p>
                  )}
                  <p className="text-xs text-gray-400">
                    <span>Already have an account?</span>
                    <Link to="/login" className="text-indigo-500">
                      Sign In
                    </Link>
                  </p>
                </div>
                <div className="py-2 text-xs font-medium text-gray-300 border-t border-gray-100 bg-gray-50">
                  By signing up, you agree to our{" "}
                  <a href="#_" className="text-indigo-400 underline">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;






