import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
    {/* // <nav className="navbar navbar-dark bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 fixed-bottom"> */}

      <div className="container">
        <Link to="/profileuser" className="navbar-brand">
          Profile
        </Link>

        <ul className="navbar-nav mx-auto">
          {getToken() && (
            <li className="nav-item">
              <Link to='/dashboard' className="nav-link text-white">
                <img src="/vite.svg" className="w-14 h-14"></img>
                Dashboard
              </Link>
            </li>
          )}
          {!getToken() && (
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-white">Sign Up</Link>
            </li>
          )}
        </ul>

        <ul className="navbar-nav ml-auto">
          {getToken() ? (
            <li className="nav-item">
              <button onClick={logOutUser} className="btn btn-link text-white">Logout</button>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
