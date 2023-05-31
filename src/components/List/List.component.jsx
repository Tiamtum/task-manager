import { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem/ListItem.component";


import "./List.styles.css";

export default function List()
{
    // const [modalShow, setModalShow] = useState(false);
    const [tasks, setTasks] = useState([{taskName:"Task Manager",shortDesc:"Complete it",longDesc:"See shortDesc",priority:"med",due:"whenever",tags:"react"}]);

    console.log("list render")
    console.log(tasks);
    return(
        <div id="List" className="container-lg mt-5">
            <div className="row justify-content-start">
                {
                    tasks.map(item=>{
                        return(
                            <ListItem task={item} />
                        );
                    })
                }
            </div>
            <Link to="/list/add" className="btn btn-outline-dark float-end mt-3">Add an item</Link>
        </div>
    );

}