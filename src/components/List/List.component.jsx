import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ListItem from "./ListItem/ListItem.component";


import "./List.styles.css";

export default function List()
{
    //https://react.dev/learn/updating-arrays-in-state
    const [tasks, setTasks] = useState([{taskName:"task",summary:"summary",description:"descrip",priority:"prio",due:"6/1/2023",tags:"React", id:0}]);

    console.log("list render", tasks)
    return(
        <div id="List" className="container-lg mt-5">
            <div className="row justify-content-around">
                    {
                        tasks.map(task=>{
                            return(
                                <ListItem task={task} key={task.id} />
                            );
                        })
                    }
            </div>
            <Link to="/list/add" className="btn btn-outline-dark float-end mt-3" state={tasks} >Add an item</Link>
        </div>
    );

}