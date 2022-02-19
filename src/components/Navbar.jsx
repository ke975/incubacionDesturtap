import { useAuth } from "../context/autContext";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export function Navbar() {
  const history = useHistory();
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand uppercase text-white" to="/">
          Traveling-Safe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            {user ? (
              <img
                className="rounded-circle"
                src={user.photoURL}
                alt="imagen del perfil"
                width="20px"
                height="auto"
              />
            ) : (
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            )}
            {user ? (
              <Link
                className="btn btn-outline-danger w-25 my-sm-0"
                type="submit"
                onClick={handleLogout}
              >
                logout
              </Link>
            ) : (
              <span>usted no esta logeado</span>
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handleLogout}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
