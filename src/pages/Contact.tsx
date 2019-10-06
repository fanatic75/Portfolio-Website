import React from "react"
import "../styles/contact.css";
import Layout from "../components/Layout";
import useDarkMode from "use-dark-mode";
const Contact: React.FC = () => {
  const darkMode = useDarkMode();
  const linkStyle = { color: darkMode.value ? "#9a97f3" : "#302ae6" };
  return (<Layout>
    <h1 className="heading">Contact Me</h1>


    <div className="contact-container">
      <h3><span role='img' aria-label="email">📧</span>Email Me</h3>
      <p>For work related, email me at : <a style={linkStyle} href=" mailto:prateekbanga12@gmail.com">prateekbanga12@gmail.com</a></p>
    </div>
    <div className="contact-container">
      <h3><span role='img' aria-label="follow">🏃‍</span>Follow Me</h3>
      <p>Find me on twitter
      <a  rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://twitter.com/fanatic75"> @fanatic75</a> </p>
      </div>
      <div className={["contact-container","somewhere-container"].join(" ")}>
        <h3>Find me Somewhere else</h3>
        <div className="somewhere-links">
          <p><a rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://github.com/fanatic75">Github</a></p>
          <p><a rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://www.linkedin.com/in/prateek-banga-324b64141/">LinkedIn</a></p>
        </div>
          
      </div>
    
    
  </Layout>)
    }
    
export default Contact