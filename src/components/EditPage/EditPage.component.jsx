import { useParams } from "react-router-dom";
import MyForm from "../MyForm/MyForm.component";
import { useEffect, useState } from "react";

export default function EditPage()
{
    const {id} = useParams()

    const [taskToEdit, setTaskToEdit] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3030/tasks?id=${id}`,
        {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
          console.log("fetched: ",result);  
          setTaskToEdit(...result);
        })
        .catch(error => console.log("error",error));
      },[])

    console.log("task", taskToEdit);
    console.log("task", taskToEdit.id);
    
    console.log("EditItem render");
    //PASS THE TASK INTO THE FORM PROP
    return(
        <div id="EditItem" className="container-lg mt-5">
            <div className="column justify-content-start">
            <MyForm
            method={"PUT"}
            taskName={taskToEdit.taskName}
            summary={taskToEdit.summary}
            description={taskToEdit.description}
            priority={taskToEdit.priority}
            due={taskToEdit.due}
            id={taskToEdit.id}
            buttonText={"Submit Edit"} />
            </div>
        </div>
    );
}