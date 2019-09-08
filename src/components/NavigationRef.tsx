import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import  "../styles/navigationRef.css";
import {CSSTransition} from 'react-transition-group' 




const NavigationRef = (props : {navigation:boolean}) => {
    const darkMode =  useDarkMode();
    const linksStyle= {color:darkMode.value?"#fff":"#212121"}
  
    return (
        <CSSTransition
        in={props.navigation}
        classNames="fadeInUp"
        timeout={{appear:100,enter:400,exit:300}}
        unmountOnExit
        mountOnEnter
        >
        <div style = {{transform:!props.navigation&&"translate3d(0,100%,0)"} as React.CSSProperties}  className={["root","paper",darkMode.value?"dark-mode-background":"light-mode-background","remove-scrollbar"].join(" ")} >
            <div className={"linksContainer"} >
                <Link style={linksStyle} className={"links"} to="/"><h2 className={"h2"}>HOME</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link style={linksStyle} className={"links"} to="/about"><h2  className={"h2"}>ABOUT</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link style={linksStyle} className={"links"} to="/portfolio"><h2  className={"h2"}>PORTFOLIO</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link  style={linksStyle} className={"links"} to="/contact"><h2  className={"h2"}>CONTACT</h2></Link>
            </div>

        </div>
        </CSSTransition>
    );
}
export default NavigationRef