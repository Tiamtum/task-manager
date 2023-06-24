import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const lastElement = arr => arr[(arr.length)-1]

async function handlePost(form)
{
    console.log("handlePost called")
    
    const formData = new FormData(form);
    let id = 0;
    await fetch(`http://localhost:3030/tasks`,{method: "GET"})
    .then(response => response.json())
    .then(result => {
        console.log("fetched: ",result, "result.length=",result.length); 
        if(result.length !== 0)
        {
            console.log("i run")
            id = parseInt(lastElement(result).id+1)
        }
    })
    .then(()=>formData.append("id",id))


    const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
    await fetch('http://localhost:3030/tasks', 
        { 
        method: "POST", 
        headers:{"Content-Type":"application/json"},
        body: formJson
        }
    )
}

async function handlePut(form,id)
{
    console.log("handlePut called")
    const formData = new FormData(form);  
    const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
    await fetch(`http://localhost:3030/tasks/${id}`, 
    { 
        method: "PUT", 
        headers:{"Content-Type":"application/json"},
        body: formJson
        }
    )
}



export default function MyForm({method, taskName, summary, description, priority, due, id,buttonText})
{
    console.log("FORM RENDER", method, buttonText)
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        if(method === "POST")
        {
            handlePost(form,navigate,method)
            .then(()=>{
                navigate("/list");
            })
        }
        else if(method === "PUT")
        {
            handlePut(form,id,navigate,method)
            .then(()=>{
                navigate("/list");
            })
        }
    }

    const [lowState, setLowState] = useState(false);
    const [medState, setMedState] = useState(false);
    const [highState, setHighState] = useState(false);
    const [nameState, setNameState] = useState("");
    const [summaryState, setSummaryState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");
    const [dueState, setDueState] = useState("");


    useEffect(()=>{
        setLowState("Low"===priority);
        setMedState("Medium"===priority);
        setHighState("High"===priority);
        setNameState(taskName)
        setSummaryState(summary)
        setDescriptionState(description)
        setDueState(due)
    },[priority,taskName, summary, description,due])

    console.log(taskName, summary, description, priority, due)
    console.log(lowState,medState,highState)
    return(
        <form method={method} onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <span className="input-group-text" id="taskInput">Task</span>
        <input value={`${nameState}`} onChange={e => setNameState(e.target.value)} name="taskName" type="text" className="form-control" placeholder="What are you planning?" aria-label="Task" aria-describedby="taskInput" autoComplete="off" />
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="summaryInput">Summary</span>
        <input value={`${summaryState}`} onChange={e => setSummaryState(e.target.value)} name="summary" type="text" className="form-control" placeholder="Breifly describe your task." aria-label="Summary" aria-describedby="summaryInput" autoComplete="off"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text">Description</span>
        <textarea value={`${descriptionState}`} onChange={e => setDescriptionState(e.target.value)} name="description" className="form-control" aria-label="With textarea" placeholder="Give some more details." autoComplete="off"></textarea>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="priorityInput">Priority</span>
        <div className="input-group-btn" data-toggle="buttons">
        <label className="btn btn-outline-success mx-2" htmlFor="lowPrio">
            <input type="radio" name="priority" id="lowPrio" autoComplete="off" value="Low" checked={lowState} onChange={e => {setLowState(e.target.checked); setMedState(false); setHighState(false)  }}  />Low
        </label>
        <label className="btn btn-outline-warning" htmlFor="medPrio">
            <input type="radio" name="priority" id="medPrio" autoComplete="off" value="Medium" checked={medState} onChange={e => {setLowState(false); setMedState(e.target.checked); setHighState(false)  }}    />Medium
        </label>
        <label className="btn btn-outline-danger mx-2" htmlFor="highPrio">
            <input type="radio" name="priority" id="highPrio" autoComplete="off" value="High" checked={highState} onChange={e => {setLowState(false); setMedState(false); setHighState(e.target.checked)  }}     />High
        </label>
        </div>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="dueInput">Due</span>
        <input value={`${dueState}`} onChange={e => setDueState(e.target.value)} name="due" type="text" className="form-control" placeholder="mm:dd::yyyy" aria-label="Due" aria-describedby="dueInput" autoComplete="off"/>
        </div>
        <button type="submit" className="btn btn-outline-dark float-end mt-3">{buttonText}</button>
        </form>        
    );

}