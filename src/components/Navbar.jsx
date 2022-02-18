
import {AuthContext} from '../context/autContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'

export function Navbar(){

const {user} =useContext(AuthContext)



return(
<>

{user ? (
        <nav className="navbar navbar-expand-lg navbar-light  container-fluid col-xs-12 ">
          <Link className="navbar-brand container   text-uppercase" to="#">
          <h4 className="text-white">Traveling-Safe</h4>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto col-xs-12">
              <li className="nav-item active">
                <Link className="nav-link  text-uppercase text-white" to="/places">
                  <h5>Inicio</h5><span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white text-uppercase" to="/Allplaces">
                <h5>  Categorias  </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white text-uppercase" to="#">
                   <h5>     Promociones  </h5>
                </Link>
              </li>
              <li className="nav-item">
                {user ? (
                  <Link
                    className="nav-link text-success text-uppercase "
                    to="#"
                  >
                    {" "}
                    <img src={user.avatar} alt="" />
                  </Link>
                ) : (
                  <Link className="nav-link disabled text-uppercase " to="#">
                    haz Login
                  </Link>
                )}
              </li>
            </ul>
            {user ? (
              <button
                className="btn btn-outline-danger w-25 my-sm-0"
                type="submit"
           
              >
                logout
              </button>
            ) : (
              <span>usted no esta logeado</span>
            )}
          </div>
        </nav>
      ) : (
        <h1>Por favor haga login para ver nuestra pagina</h1>
      )}


</>
    
)




}