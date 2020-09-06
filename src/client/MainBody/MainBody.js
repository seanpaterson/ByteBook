import React, { Component } from 'react';
import Home from "./Home/Home";
import About from "./About/About";
import MyBytes from "./MyBytes/MyBytes";
import CreateByte from "./CreateByte/CreateByte";
import ViewByte from "./ViewByte/ViewByte";
import  { Route } from "react-router-dom";

class MainBody extends Component {
    render(){
        return(
    <div style={{paddingTop:"80px"}}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mybytes" render={(props) => <MyBytes {...props} AccountInfo={this.props.AccountInfo} />} />
        <Route path="/createbyte" render={(props) => <CreateByte {...props} AccountInfo={this.props.AccountInfo} />} />
        <Route path="/viewbyte/:byteid" render={(props) => <ViewByte {...props} AccountInfo={this.props.AccountInfo} />} />
    </div>
    );
    }
}

export default MainBody;