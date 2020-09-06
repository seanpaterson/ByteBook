import React, { Component } from 'react';
import { Paper, Button, Grid, Typography, withStyles } from '@material-ui/core';

const style = {
    photoStyle: {
        width: "100%",
        height: "auto",
        overflow:'hidden',
    }
};

export default class ViewPhoto extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <img src={require("../../utils/images/bytebook logo image.PNG")} alt="bytebook" width="100%"/>
        );
    }
}