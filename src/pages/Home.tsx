import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css";
import Particles from 'react-particles-js';
import useMedia from "use-media";
import useDarkMode from "use-dark-mode";
const IndexPage:React.FC = () => {
  const darkMode = useDarkMode();
  const isWide: boolean = useMedia({ minWidth: 800 });
  return (
  <Layout>
    {isWide&&<Particles params={{particles:{color:{value:"#f00"},number:{value:40},line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}}}} style={{zIndex:"-1",position:"absolute"}} height="70%" width="95%"/>}
    <div className="greeting-container">
     <h1 className="hi">Hi, <span className="nameholder">I'm <span className={darkMode.value?"nameDark":"nameLight"}>Prateek Banga</span></span></h1>
    <p>I make things on the Internet.</p>
    </div>
    
  </Layout>
)}

export default IndexPage
