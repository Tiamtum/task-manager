import {Link} from "react-router-dom";
export default function Navbar({brandText,buttonText}){

    return(
      <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-3">{brandText}</Link>
      <Link to="/about" className="btn btn-info mx-3" role="button">{buttonText}</Link>
      </nav>
    );

}