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
      <nav className="navbar navbar-expand-lg navbar-light  container">
  <Link className="navbar-brand text-white" to="#">Traveling-Safe</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <form class="d-flex">
      <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>


  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-link active text-white" to="#">Lugares <span className="sr-only">(current)</span></Link>
      <Link className="nav-link text-white" to="#">Categorias</Link>

      {user ? (
        <>
       
        <img src={user.photoURL} className="rounded-circle m-2 " style={{width:"30px",height:"30px"}} alt="" />
        <Link className="nav-link text-white" onClick={handleLogout}>logout</Link>
        </>
      ):(
        <Link className="nav-link text-white" to="/Login">login</Link>
      )}
     


    
    </div>
  </div>
</nav>
    </>
  );
}









// {user ? (
//   <img
//     className="rounded-circle"
//     src={user.photoURL}
//     alt="imagen del perfil"
//     width="20px"
//     height="auto"
//   />
// ) : (
//   <Link className="dropdown-item" to="/login">
//     Login
//   </Link>
// )}
// {user ? (
//   <Link
//     className="btn btn-outline-danger w-25 my-sm-0"
//     type="submit"
//     onClick={handleLogout}
//   >
//     logout
//   </Link>
// ) : (
//   <span>usted no esta logeado</span>
// )}