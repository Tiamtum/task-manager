import {Link} from "react-router-dom";
import ColoredLine from "../utils/components/ColoredLine.component";



export default function Root() {
    return(        
        <div className="jumbotron text-center my-5">
        <h1 className="display-4">Welcome to Task Manager</h1>
        <p className="lead">List making application inspired by Trello. </p>
        <ColoredLine color={"Black"} className="my-4"/>
        <p>Login to start making lists</p>
        <p className="lead">
            <Link to="/login" className="btn btn-primary btn-lg" role="button">Login</Link>
        </p>
        <Link to="/dashboard">Dashboard</Link>
        </div>   
    );
  }