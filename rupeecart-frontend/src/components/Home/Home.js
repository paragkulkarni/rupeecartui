import { Component } from "react";
import './style.scss';
import NavBar from "./NavBar";


class Home extends Component{
    render(){
        return (
                <div className="container-fluid">
                    <NavBar />
                    <h1>Here is home</h1>
                    

                </div>
        );
    }
}

export default Home;