import React, { Component } from "react";
import './style.scss';

class Sidemenu extends Component{
    constructor(){
        super();
        this.state = {
            open: false,
            close: false
        }
        // this.closeNav = this.closeNav.bind(this);  
        this.sideMenuId = React.createRef();
        this.openSideNav = this.openSideNav.bind(this);
        this.closeSideNav = this.closeSideNav.bind(this);
    }

    openSideNav(){
        this.setState({open: true});
        // this.sideMenuId.current.width = '200px';
    }

    closeSideNav(){
        this.setState({open: false});
        // this.sideMenuId.current.width = '0';
    }


    // closeNav(menuFlag){
    //     console.log("yes - closeNav")
    //     switch (menuFlag) {
    //         case 'close':
    //             this.setState({menuFlag: true})
    //             break;
        
    //         default:
    //             this.setState({menuFlag: false})
    //             break;
    //     }
    // }

    toggleOpen(){
        this.setState({open: true});
    }

    render(){
        const {open, close} = this.state;
        return (
            
            <div className={open?"sidemenu":"wrapper"} ref={this.sideMenuId}>
                <button type="button" className="btn-open" onClick={()=>this.closeSideNav()}>
                    X
                </button>
            </div>            
        );
    }
}

export default Sidemenu;