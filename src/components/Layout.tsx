import React, { useState, useEffect } from "react"
import { withTheme } from '@material-ui/styles';
import PropTypes from "prop-types";
import { useMedia } from "use-media";
import Header from "./header"
import { ButtonNav } from "./ButtonNav";
import NavigationRef from "./NavigationRef";

const Layout : any = ( props : {children:HTMLElement}) => {

  const isWide: boolean = useMedia({ minWidth: 700 });

  const [navigation, showNavigation] = useState(false);
  useEffect(()=>{
    const body=document.body.style;
    navigation? body.overflow="hidden":body.overflow="initial";
      

  },[navigation]);


  const buttonNav = <ButtonNav navigation={navigation} showNavigation={showNavigation} />

  return (
    <>

        { <Header  />}
        <div
          style={{
            margin: `1.25rem auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {
     !isWide &&
            
                 <NavigationRef navigation={navigation}/>
             
               
            }
           
          <main >{props.children}</main>
          {!isWide && buttonNav}
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>




    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
