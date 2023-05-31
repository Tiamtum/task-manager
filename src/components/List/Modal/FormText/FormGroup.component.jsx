import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function FormGroup() {
  console.log("FormGroup render")
  
  return (
    <>
      
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Task</InputGroup.Text>
        <Form.Control type="text" id="taskName" placeholder="Describe the task as breifly as you can." />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="text area" placeholder="Elaborate on the task." />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Priority</InputGroup.Text>
        <Form.Control as="select" aria-label="priority selection">
            <option>Click to choose a priority</option>
            <option value="low" style={{backgroundColor:"rgb(104, 237, 120)",color:"white"}}>Low</option>
            <option value="medium"style={{backgroundColor:"rgb(219, 204, 114)",color:"white"}}>Medium</option>
            <option value="high"style={{backgroundColor:"rgb(184, 72, 88)",color:"white"}}>High</option>
        </Form.Control>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Due</InputGroup.Text>
        <Form.Control type="text" id="due" placeholder="Format: month-day-year" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tags</InputGroup.Text>
        <Form.Control type="text" id="taskName" placeholder="Tag this task with a comma seperated list of words" />
      </InputGroup>
    </>
  );
}
