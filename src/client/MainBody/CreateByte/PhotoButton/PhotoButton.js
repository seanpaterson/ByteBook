import React, { Component } from 'react';
import { Paper, Button, Grid, Typography, withStyles } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import BYTEBOOK_COLORS from "../../../utils/colors";

const style = {
    buttonStyle: {
        width: "100%",
        maxHeight: "200px",
        height: "200px",
        overflow:'hidden',
        background: BYTEBOOK_COLORS.GREY
    },
    cameraStyle: {
        width: "60px",
        height: "60px",
        color: BYTEBOOK_COLORS.WHITE
    },
    centerPadding: {
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    leftTextStyle: {
        fontFamily: "Segoe Script",
        color: BYTEBOOK_COLORS.WHITE,
        fontSize: "30px",
        textAlign: 'right'
    },
    rightTextStyle: {
        fontFamily: "Segoe Script",
        color: BYTEBOOK_COLORS.WHITE,
        fontSize: "30px",
        textAlign: 'left'
    },
    imageStyle: {
        width: "100%",
        overflowY: 'auto',
        height: "100%"
    }
};

export default class PhotoButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUploaded:false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        if(e.target.files[0])
        {
            this.props.AddImage(e.target.files[0]);
            this.setState({
                isUploaded:true
            });
        }
    }
    render() {
        return(
                <Grid container>
                    <Grid item xs = {12}>
                        <input 
                        type='file' 
                        accept="image/*" 
                        id="icon-button-file"
                        style={{display:'none'}}
                        onChange={this.handleChange}
                        />
                        <label htmlFor="icon-button-file">
                        <Button aria-label="upload picture" component="span" style={style.buttonStyle}>
                                { this.state.isUploaded ? 
                                <img src={this.props.info.image} style={style.imageStyle} />
                                : 
                                <Grid container style={style.centerPadding}>
                                    <Grid item xs = {5}>
                                        <Typography style={style.leftTextStyle}>Click To</Typography>
                                    </Grid>
                                    <Grid item xs = {2}>
                                        <PhotoCamera style = {style.cameraStyle} />
                                    </Grid>
                                    <Grid item xs = {5}>
                                        <Typography style={style.rightTextStyle}>Add Photo</Typography>
                                    </Grid>
                                </Grid>}
                        </Button>
                        </label>
                    </Grid>
                </Grid>
        );
    }
}