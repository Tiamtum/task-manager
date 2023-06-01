import { Link, useLocation } from "react-router-dom";
export default function AddItem()
{
    const {state} = useLocation();
    const {description,due,id,priority,summary,tags,taskName} = state[0];
    console.log("additem render",state);
    return(
        <div id="AddItem" className="container-lg mt-5">
            <div className="column justify-content-start">
                <div className="input-group mb-3">
                <span className="input-group-text" id="taskInput">Task</span>
                <input type="text" className="form-control" placeholder="What are you planning?" aria-label="Task" aria-describedby="taskInput" />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="summaryInput">Summary</span>
                <input type="text" className="form-control" placeholder="Breifly describe your task." aria-label="Summary" aria-describedby="summaryInput"/>
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <textarea className="form-control" aria-label="With textarea" placeholder="Give some more details."></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text" id="priorityInput">Priority</span>
                <div className="input-group-btn" data-toggle="buttons">
                <label className="btn btn-outline-success mx-2" htmlFor="lowPrio">
                    <input type="radio" name="priority" id="lowPrio" autoComplete="off" />Low
                </label>
                <label className="btn btn-outline-warning" htmlFor="medPrio">
                    <input type="radio" name="priority" id="medPrio" autoComplete="off"/>Medium 
                </label>
                <label className="btn btn-outline-danger mx-2" htmlFor="highPrio">
                    <input type="radio" name="priority" id="highPrio" autoComplete="off"/>High
                </label>
                </div>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text" id="dueInput">Due</span>
                <input type="text" className="form-control" placeholder="mm:dd::yyyy" aria-label="Due" aria-describedby="dueInput"/>
                </div>                               

            </div>
            <Link to="/list" id="addBtn" className="btn btn-outline-dark float-end mt-3">Add</Link>
        </div>
    );
}