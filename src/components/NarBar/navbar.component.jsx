export default function NavBar(props){
    const {text, buttonText} = props;
    return(
    <nav className="navbar navbar-light bg-light justify-content-between">
    <p className="navbar-brand mx-2 my-0">{text}</p>
    <form className="form-inline">
        <button className="btn btn-outline-success mx-2 my-2 my-sm-0" type="submit">{buttonText}</button>
    </form>
    </nav>
    );
}