import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormGroup from './FormText/FormGroup.component';

const isEmptyTask = state => Object.values(state).every((value) => value==="");
//https://react.dev/learn/updating-arrays-in-state

export default function AddTaskModal(props) {
    const {heading,tasks,setTasks,onHide} = props;
    // const button = document.querySelector("#bsButton");
    // button.addEventListener("click",event=>{
    //   console.log(event);
    // })
    console.log("addtaskmodal tasks: " , tasks);
    console.log(isEmptyTask(tasks[0]));

    console.log("Addtaskmodal render")
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup/>
        <button className="btn btn-outline-dark float-end mt-3" onClick={onHide} id="addBtn">Add</button>

      </Modal.Body>
    </Modal>
  );
}