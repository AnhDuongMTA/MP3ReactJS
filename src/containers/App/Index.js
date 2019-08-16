import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Content from "../Content/Content";
import Top from "../Top100/Top";
import VideoHot from "../VideoHot/VideoHot";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
       
        <Header />
        <Banner />
        <Content />
        {/* <Top></Top> */}
        {/* <VideoHot></VideoHot> */}
      </div>
    );
  }
}

export default Index;
