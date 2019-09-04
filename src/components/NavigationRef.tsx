import React from "react";
import { Link } from "react-router-dom";
import { withTheme } from '@material-ui/styles';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import useDarkMode from "use-dark-mode";

import {CSSTransition} from 'react-transition-group' 


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute", height: "100%", width: "100%", top: "0px", left: "0px", zIndex: 3,
       

        
    },
    linksContainer: {
        padding: theme.spacing(4),
        margin: theme.spacing(2),
        display: "flex",
        justifyContent: "center"
    },
    links:{
        display: "flex",
        justifyContent: "center",
    },
    h2:{
        
        marginBottom: "0 !important"
    }
}))

const NavigationRef = (props : {navigation:boolean}) => {
    const darkMode =  useDarkMode();
    const linksStyle= {color:darkMode.value?"#fff":"#212121"}
    const classes = useStyles();
    return (
        <CSSTransition
        in={props.navigation}
        classNames="fadeInUp"
        timeout={{appear:500,enter:500,exit:500}}
        unmountOnExit
        mountOnEnter
        >
        <Paper style = {{backgroundColor:darkMode.value?"#000":"#fff",transform:!props.navigation&&"translate3d(0,100%,0)"} as React.CSSProperties}  className={classes.root} elevation={0}>
            <div className={classes.linksContainer} >
                <Link style={linksStyle} className={classes.links} to="/"><h2 className={classes.h2}>HOME</h2></Link>
            </div>
            <div className={classes.linksContainer} >
                <Link style={linksStyle} className={classes.links} to="/about"><h2  className={classes.h2}>ABOUT</h2></Link>
            </div>
            <div className={classes.linksContainer} >
                <Link style={linksStyle} className={classes.links} to="/portfolio"><h2  className={classes.h2}>PORTFOLIO</h2></Link>
            </div>
            <div className={classes.linksContainer} >
                <Link  style={linksStyle} className={classes.links} to="/contact"><h2  className={classes.h2}>CONTACT</h2></Link>
            </div>

        </Paper>
        </CSSTransition>
    );
}
export default withTheme(NavigationRef)