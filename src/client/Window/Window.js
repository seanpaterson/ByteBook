import React, { Component } from 'react';
import Header from '../Header/Header';
import SideBar from "../SideBar/SideBar";
import MainBody from "../MainBody/MainBody";
import  { BrowserRouter as Router} from "react-router-dom";

const style = {
    MainBody: {
        paddingLeft: "75px"
    }
};

class Window extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
        <Router>
        <div style={{width: '100%'}}>
        <Header />
        <div>
            <div>
                 <SideBar />
            </div>
            <div style={style.MainBody}>
                <MainBody AccountInfo= {this.props.AccountInfo}/>
            </div>
        </div>
        </div>
        </Router>
        </div>
        );
    }
}

export default Window;