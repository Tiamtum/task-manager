import {Link} from "react-router-dom";
export default function Navbar({brandText,buttonText}){
    if(buttonText === "About")
    {
        return(
            <nav className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand mx-2">{brandText}</Link>
            <Link to="/about" className="btn btn-info mx-2" role="button">{buttonText}</Link>
          </nav>
        );        
    }

}