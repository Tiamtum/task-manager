import { Button } from "react-bootstrap";

export default function MyButton({text,showStateHandler})
{
    console.log("my button render")

    return(
            <Button variant="outline-dark" size="sm" className="float-end mt-3" onClick={() => showStateHandler(true)}>
            {text}
            </Button>
    );
}