// import {Link} from "react-router-dom";
import ColoredLine from "../../utils/components/ColoredLine.component";

export default function AboutPage() {
    return(        
        <div className="jumbotron text-center my-5">
        <h1 className="display-4">About</h1>
        <p className="lead"> List making application inspired by Trello. </p>
        <ColoredLine color={"Black"} className="my-4"/>
        <a href="https://github.com/Tiamtum/task-manager">https://github.com/Tiamtum/task-manager</a>
        </div>   
    );
  }