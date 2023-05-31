import { useState } from "react";
import ListItem from "./ListItem/ListItem.component";
import AddTaskModal from "./Modal/AddTaskModal.component";
import MyButton from "./Button/MyButton";

import "./List.styles.css";

export default function List()
{
    const [modalShow, setModalShow] = useState(false);
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

            <MyButton text={"Add a task"} showStateHandler={setModalShow} />
            <AddTaskModal tasks={tasks} heading={"Add a task"} show={modalShow} onHide={() => setModalShow(false)} />


        </div>
    );

}