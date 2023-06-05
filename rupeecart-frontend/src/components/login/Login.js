import { Component } from "react";
import {loginAuthService} from '../../Services/AuthService';
import './login.scss';
import { Navigate } from "react-router-dom";
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loginUser: null,
            loginError: null,
            token : cookies.get('token') || null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(e){
        e.preventDefault();
        console.log(e)
        const target = e.target;
        this.setState({
          [target.name]: target.value,
        });
    }

    handleLogin(e){
        e.preventDefault();
        console.log(e.target.value)
        console.log(this.state.email, this.state.password)
        loginAuthService(this.state.email, this.state.password).then((res)=>{
            console.log("Success",res.status)
            if(res.data.success){
                const token = res.data.token;
                cookies.set('token', token);
                return this.setState({token: token,loginUser: true})
            }
        }).catch((error)=>{
            console.log(error)
            return this.setState({loginError: false})
        })
    }

    render(){

        return (
            <div>
                {this.state.loginError && <p>{this.state.loginError.message}</p>}
                {this.state.loginUser && (
                <Navigate to="/home" replace={true} />
                )}
                {
                    !this.state.loginUser &&
                    !this.state.loginError &&
                    (
                        <div className="container">
                        <h2 className="text-center">Login</h2>
                        <form className="form justify-content-center mx-auto form-width" onSubmit={this.handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Username / Email</label>
                            <input type="text" id="email" name="email" value={this.state.email} className="form-control" onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.password} id="password" className="form-control" onChange={this.handleInputChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-1">Login</button>
                        </form>
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default Login;