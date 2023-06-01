import { Link } from "react-router-dom";

export default function LandingPage()
{
    console.log("landing page render")
    return(
        <div className="jumbotron text-center my-5">
        <h1 className="display-4">Task Manager</h1>
        <p className="lead">     <Link to="/list">Create list</Link> </p>
        </div>   
    );
}