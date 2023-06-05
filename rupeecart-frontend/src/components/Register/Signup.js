import { Component } from "react";
import { regAuthService } from '../../Services/AuthService'
class Signup extends Component{
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            regSuccess: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputChange(e){
        const {id , value} = e.target; //We can determine input by id, due to id we dont need the separate function htmlFor each input
        if(id === 'f-name'){
            this.setState({
                firstname: value
            });
        } else if(id === 'l-name'){
            this.setState({
                lastname: value
            });
        } else if(id === 'e-id'){
            console.log('3')

            this.setState({
                email: value
            });
        } else if(id === 'pwd'){
            this.setState({
                password: value
            });
        } else if(id === 'c-pwd'){
            this.setState({
                confirmPassword: value
            });
        }

    }

    handleFormSubmit(){
        console.log(this.state)
        const data = {
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }
        console.log("here-",data)

        const regUser =  regAuthService(data)
        regUser.then(result=>{
            console.log("Register-",result)
            if(result.status==201 && result.data.success){
                return this.setState({
                    regSuccess: true, 
                    firstname: result.data.data.first_name,
                    lastname: result.data.data.last_name
                })
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.regSuccess && (<h3>Hi <b>{this.state.firstname + ' ' + this.state.lastname}</b>, you are successfully register. Thank you</h3>)}
                {!this.state.regSuccess && 
                (<div className="form justify-content-center mx-auto form-width mt-5" >
                    <h1 className="text-center">Register</h1>
                    <div className="form-group">
                        <label htmlFor="f-name">Firstname</label>
                        <input type="text" id="f-name" value={this.state.firstname} className="form-control" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="l-name">Lastname</label>
                        <input type="text" id="l-name" value={this.state.lastname} className="form-control" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="e-id">Email</label>
                        <input type="text" id="e-id" value={this.state.email} className="form-control" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" id="pwd" value={this.state.password} className="form-control" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="c-pwd">Confirm Password</label>
                        <input type="password" id="c-pwd" value={this.state.confirmPassword} className="form-control" onChange={this.handleInputChange} />
                    </div>
                    <div className="text-center">
                        <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">Signup</button>
                    </div>
                </div>)}
            </div>
        );
    }
}

export default Signup;