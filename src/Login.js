import { useState } from 'react';
import '../App.css'
//  import { Link } from "react";



function Login() {

    const [namelog, setNamelog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [Loginstatus, setLoginStatus] = useState("");

    return (  <body className=" bg-secondary pb-5">
    <main className="  pt-5">
    <div className="container pb-4">
        <div className="row justify-content-center pb-5">
            <div className="col-lg-5">
                <div className="card border-1 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                        <form>
                            <div className="form-floating mb-4">
                                <input className="form-control" id="inputEmail" type="email"
                                onChange={(e) => setNamelog(e.target.value)}
                                 placeholder="name@example.com" />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input className="form-control" id="inputPassword" type="password"
                                onChange={(e) => setPasswordlog(e.target.value)}
                                 placeholder="Password" />
                                <label for="inputPassword">Password</label>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                                {/* <Link className="btn btn-dark px-5" onClick='' to={Loginstatus}>Login</Link> */}
                            </div>
                            <p className='text-center mt-3 text-danger'>{Loginstatus}</p>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        {/* <div className="small"><Link className="text-dark " id="a" to="/User">Need an account? Sign up!</Link></div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
</body>
        
    );
}

export default Login;