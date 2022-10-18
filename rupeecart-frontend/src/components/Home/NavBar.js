import React, { Component } from "react";
import Sidemenu from "./Sidemenu";
import './style.scss';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {
            menuFlag: false
        }
        this.openNav = this.openNav.bind(this); 
        this.child = React.createRef(); 
        // this.child.current.closeSideNav();
    }
   
    openNav(menuFlag){
        console.log(menuFlag)
        switch (menuFlag) {
            case "show":
                // this.setState({ menuFlag: true });
                this.child.current.openSideNav();
                break;
        
            case "off":
                this.setState({ menuFlag: false });
                this.child.current.closeSideNav();
                break;
        }
    }

    render(){
        const { menuFlag } = this.state;  
        return (
            <div className="navbar ">
                <div className="container-fluid">
                    <button type="button" className="navbar-brand" onClick={()=>this.openNav('show')}>Home</button>
                    <Sidemenu ref={this.child} openNav={this.openNav} />
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link active">Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            
           
        );
    }
}

export default NavBar;


/* <div className="wrapper">
<div className="sidemenu">
</div>
</div> */