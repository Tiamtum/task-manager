import MyForm from "./MyForm.component";
export default function AddItem()
{
    console.log("additem render");
    return(
        <div id="AddItem" className="container-lg mt-5">
            <div className="column justify-content-start">
            <MyForm />
            </div>
        </div>
    );
}