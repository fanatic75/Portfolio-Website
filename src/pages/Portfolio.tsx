import React from "react"
import Layout from "../components/Layout";
import Card from "../components/Card";

const urlStyle: React.CSSProperties = {
  backgroundImage:"url(/src/assets/logo.png)"
}

const Portfolio:React.FC = () => {
  return (
  <Layout>
    <Card image={{url:urlStyle ,title:"Hello"}} title="Hey" content="what up card" github={{href:"https://github.com"}}/>
    <Card image={{url:urlStyle ,title:"Hello"}} title="Hey" content="what up card" github={{href:"https://github.com"}}/>

  </Layout>
)}

export default Portfolio;
