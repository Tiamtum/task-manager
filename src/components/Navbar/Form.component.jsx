export default function FormComponent({name,buttonText,action})
{
    return(
        <div className="row">
        <h1 className="text-center"> {name} </h1>
            <div className="col-6 offset-3">
                <form action={action} noValidate className="validated-form">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success">{buttonText}</button>
                    </div>
                </form>
            </div>
        
    </div>
    );
}