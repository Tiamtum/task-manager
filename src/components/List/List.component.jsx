import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ListItem from "./ListItem/ListItem.component";
import ColoredLine from "./ColoredLine/ColoredLined.component";


import "./List.styles.css";

export default function List()
{
    //https://react.dev/learn/updating-arrays-in-state
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:3030/tasks",
      {
        method: "GET"
      })
      .then(response => response.json())
      .then(result => {
        console.log("fetched: ",result);  
        setTasks([...result]);
      })
      .catch(error => console.log("error",error));
    },[])
  

    console.log("list render", tasks)
    return(
        <div id="List" className="container-lg mt-5">
            <div className="row justify-content-around">
              <span className="col mb-2"><strong>Task</strong></span>            
              <span className="col mb-2"><strong>Priority</strong></span>
              <span className="col mb-2"><strong>Due</strong></span> 
              <span className="col mb-2"><strong>Summary</strong></span>           
              <span className="col mb-2"><strong>Actions</strong></span>
              <ColoredLine color="black" />
                    {
                        tasks.map(task=>{
                            return(
                                <ListItem task={task} key={task.id} />
                            );
                        })
                    }
            </div>

            <Link to="/list/add" className="btn btn-outline-success float-end mt-5" state={tasks} >Add an item</Link>
        </div>
    );

}