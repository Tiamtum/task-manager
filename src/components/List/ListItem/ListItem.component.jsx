import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";

import { useState } from "react";
import ColoredLine from "../ColoredLine/ColoredLined.component";

export default function ListItem({task})
{
    //taskName:"",summary:"",description:"",priority:"",due:"",tags:""

    const {taskName, summary, description, priority, due} = task;
    console.log("list item render", task)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
           <span id="task" className="col">{taskName}</span>            
           <span id="prio" className="col">{priority}</span>
           <span id="due" className="col">{due}</span> 
           <span id="summary" className="col">{summary}</span>           
            <span className="col"><Button variant="outline-primary" className="mb-3" onClick={handleShow}>Details </Button></span>
            <ColoredLine color="black" />
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{taskName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{summary}</h4>
                <p>{description}</p>
                <p>{due}</p>
                <p>{priority}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}