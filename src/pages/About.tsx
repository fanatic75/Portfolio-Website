import React from "react"
import me from '../assets/me.jpg';
import slogan from "../assets/bat.png";
import logo from "../assets/bat.svg";
import Layout from "../components/Layout";
import "../styles/about.css";
const About: React.FC = () => (
  <Layout>
    <h1 className="heading">About Me</h1>
    <div className="about-container">

      <p>
        <img className="mypicture" src={me} alt="Myself" /></p>
      <p>A Full-Stack Developer based from Mathura, currently residing in Bangalore, pursuing BTech from  <strong>Bangalore Institute Of Technology</strong>.
       Talk to me about problem-solving, Crytpocurrencies, Web Development.I code in Javascript, Typescript & Java. Currently My working stack is
         ReactJS, NodeJS, NOSQL DB. In my free time, I like to listen to  rock music and read tech related news.</p>
    </div>
    <div className="support-container">

      <h2>Support Me</h2>
      <br />
      <p>Do you like my work and want to support me? Do so by donating BAT tokens or by downloading Brave Browser from <a href="https://brave.com/bit451">Here</a>.<br /> I support zero-ads Internet on all my work.</p>
      
     
        <a className="bat-container" href="https://brave.com/bit451">
        <img src={slogan} style={{transform:"scale(0.8)"}} width="70%"alt="Brave Slogan"/>
        <img src={logo} alt="BAT Token" />
        </a>
      
    </div>
  </Layout>
)

export default About
