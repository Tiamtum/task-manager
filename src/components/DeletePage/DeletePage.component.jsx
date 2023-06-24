import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ColoredLine from "../List/ColoredLine/ColoredLined.component"

export default function DeletePage()
{
    const {id} = useParams()

    const [taskToDelete, setTaskToDelete] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3030/tasks?id=${id}`,
        {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
          console.log("fetched: ",result);  
          setTaskToDelete(...result);
        })
        .catch(error => console.log("error",error));
      },[])


      let navigate = useNavigate();
        function handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:3030/tasks/${id}`, { method: "DELETE"}).then(() => navigate("/list"));
    }

return(
<>
<h4 className="my-3 mx-3">Are you sure you want to delete the following task: </h4>
<div className="List container-lg mt-2">
<div className="row justify-content-around">
            <span className="col mb-2"><strong>Task</strong></span>            
              <span className="col mb-2"><strong>Priority</strong></span>
              <span className="col mb-2"><strong>Due</strong></span> 
              <span className="col mb-2"><strong>Summary</strong></span>                     
</div>
<ColoredLine color="black" />
<div className="row justify-content-around">
<span className="col mb-2">{taskToDelete.taskName}</span>            
              <span className="col mb-2">{taskToDelete.priority}</span>
              <span className="col mb-2">{taskToDelete.due}</span> 
              <span className="col mb-2">{taskToDelete.summary}</span> 
</div>
<Link to="/list" className="btn btn-outline-success float-end mt-5" >Back</Link>
<form method="DELETE" onSubmit={handleSubmit}>
<button type="submit" className="btn btn-outline-danger float-start mt-5">Delete Task</button>
</form>
</div>
</>
);
}