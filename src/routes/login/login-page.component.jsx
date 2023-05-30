import { Link } from "react-router-dom";
import FormComponent from "../../components/Navbar/Form.component";

export default function LoginPage(){
    return(
        <>
        <FormComponent name={"Login"} buttonText={"Login"} action={"#"}/>
        <p className="text-center">Don't have an account? Click <Link to="/register">here</Link> to register.</p>
        </>
    );
    
}