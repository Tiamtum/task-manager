import MyForm from "../../MyForm/MyForm.component";
export default function AddItem()
{
    console.log("additem render");
    return(
        <div id="AddItem" className="container-lg mt-5">
            <div className="column justify-content-start">
            <MyForm
            method={"POST"}
            taskName={""}
            summary={""}
            description={""}
            priority={""}
            due={""}
            id={""}
            buttonText={"Add"} />
            </div>
        </div>
    );
}