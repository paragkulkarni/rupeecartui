import React, { Component } from "react";
import Sidemenu from "./Sidemenu";
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
class NavBar extends Component{
    constructor(){
        super();
        this.state = {
            menuFlag: false
        }
        this.openNav = this.openNav.bind(this); 
        this.child = React.createRef(); 
        this.gotoLoginPage = this.gotoLoginPage.bind(this)
        // this.child.current.closeSideNav();
    }

    gotoLoginPage(){
        return this.props.history.push('/')
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
            <div className="navbar navbar-expand-lg navbar-light nav-style">
                
                <button type="button" className="home-css" onClick={()=>this.openNav('show')}><FontAwesomeIcon icon={faBars} size={'2x'}/></button>

                {/* className="navbar-brand m-0 btn btn-primary btn-logout end-0" */}
               
                    
                
                {/* <button type="button" className="navbar-brand m-0 btn btn-primary btn-logout end-0" onClick={()=>this.gotoLoginPage}>Logout</button> */}
                <Sidemenu ref={this.child} openNav={this.openNav} />
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link active"></a>
                        <a href="#" className="nav-item nav-link active">Profile</a>
                    </div> */}
                    <div className="row w-100">
                        <div className="col">
                            <Link to="/" className="navbar-brand btn-logout float-end"><FontAwesomeIcon icon={faSignOut} size={'1x'}/></Link>
                            <div className="float-end cart-style">
                                <div className="float-start pt-2 h5 ps-3">4</div>
                                <Link to="/" className="navbar-brand btn-logout float-end"><FontAwesomeIcon icon={faCartShopping} size={'1x'}/></Link>
                            </div>
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