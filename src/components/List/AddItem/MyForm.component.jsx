import { useNavigate } from "react-router-dom";

let id="0";

export default function MyForm()
{
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        formData.append("id",id);
        id = `${parseInt(id)+1}`

        const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
        fetch('http://localhost:3030/tasks', 
            { 
            method: form.method, 
            headers:{"Content-Type":"application/json"},
            body: formJson
            }
        )
        .then(()=>{
            navigate("/list")}
        );
    }
    return(
        <form method="POST" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <span className="input-group-text" id="taskInput">Task</span>
        <input name="taskName" type="text" className="form-control" placeholder="What are you planning?" aria-label="Task" aria-describedby="taskInput" />
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="summaryInput">Summary</span>
        <input name="summary" type="text" className="form-control" placeholder="Breifly describe your task." aria-label="Summary" aria-describedby="summaryInput"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text">Description</span>
        <textarea name="description" className="form-control" aria-label="With textarea" placeholder="Give some more details."></textarea>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="priorityInput">Priority</span>
        <div className="input-group-btn" data-toggle="buttons">
        <label className="btn btn-outline-success mx-2" htmlFor="lowPrio">
            <input type="radio" name="priority" id="lowPrio" autoComplete="off" value="Low" />Low
        </label>
        <label className="btn btn-outline-warning" htmlFor="medPrio">
            <input type="radio" name="priority" id="medPrio" autoComplete="off" value="Medium" />Medium
        </label>
        <label className="btn btn-outline-danger mx-2" htmlFor="highPrio">
            <input type="radio" name="priority" id="highPrio" autoComplete="off" value="High" />High
        </label>
        </div>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="dueInput">Due</span>
        <input name="due" type="text" className="form-control" placeholder="mm:dd::yyyy" aria-label="Due" aria-describedby="dueInput"/>
        </div>
        <button type="submit" className="btn btn-outline-dark float-end mt-3">Real BTN</button>
        </form>
    );
}