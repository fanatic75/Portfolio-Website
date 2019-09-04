import { Link } from "react-router-dom";
import React from "react";
import { withTheme } from '@material-ui/styles';
import useMedia from "use-media";
import {Logo} from "./Logo";
import "../styles/header.css";
import ThemeSwitch from "./ThemeSwitch";
import useDarkMode from "use-dark-mode";


const Header = () => {
  const isWide = useMedia({ minWidth: 700 });
  const darkMode = useDarkMode();
  const h2 = {
    color:darkMode.value? "#fff": "#212121",
  
  }
  return (<header
    className={["header-container",darkMode.value?" light-border":" dark-border"].join("")}
  >
        <div className= {"logo"}>
        <Link
          to="/"
          
        >
         <Logo /> 


        </Link>
        </div>

        <nav >
        {isWide&&<ul>
    <li ><Link to="/"><h2 style={h2}>Home</h2></Link></li>
  <li ><Link to ="/about" ><h2 style={h2}>About</h2></Link></li>
  <li ><Link  to="/portfolio"><h2 style={h2}>Portfolio</h2></Link></li>
  <li ><Link  to="/contact"><h2 style={h2}>Contact</h2></Link></li>
</ul>}
<ThemeSwitch />

</nav>
        
        
    
  </header>)
}


export default withTheme(Header);
