import { Link, useParams } from "react-router-dom";

export default function DetailedListItem()
{
    console.log("detailedlistitem render")
    const {id} = useParams();
    return(
        <div id="DetailedListItem" className="container-lg mt-5">
        <div className="column justify-content-start">
          

        </div>
        <Link to="/list" className="btn btn-outline-dark float-end mt-3">Back</Link>
    </div>
    );
}