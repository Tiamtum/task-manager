import {Link} from "react-router-dom";
export default function Navbar({brandText,buttonText}){

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-3">{brandText}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link to="/list" className="mx-3 link-light" >My list</Link>
      </div>
      <Link to="/about" className="btn btn-info mx-3" role="button">{buttonText}</Link>
      </nav>
    );

}
