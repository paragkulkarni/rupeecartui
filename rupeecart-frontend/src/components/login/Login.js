import { Component } from "react";
import './login.scss';


class Login extends Component{
    render(){
        return (
                <div className="form justify-content-center mx-auto">
                    <div className="form-group">
                        <label for="uid">Username / Email</label>
                        <input type="text" id="uid" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" id="pwd" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-1">Login</button>

                </div>
        );
    }
}

export default Login;