import React, { Component } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import ByteBook from "../../../http/ByteBook";
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    saveButtonStyle: {
        background: BYTEBOOK_COLORS.GREEN,
        color: BYTEBOOK_COLORS.WHITE,
        height: '100%',
        width: '100%',
    },
    titleFieldStyle: {
        color: BYTEBOOK_COLORS.GREY,
        textAlign: 'left',
        width: "100%",
        paddingRight: "20px"
    },
};

export default class SaveButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        ByteBook.createByte(this.props.info).then(byteid => {
            if(byteid != -1)
            window.location = '/viewbyte/' + byteid;
        })
    }
    render(){
        return(
            <Grid container style={{paddingRight:'20px', paddingBottom: '10px', paddingTop: '20px'}}>
                <Grid item xs={6} style={{textAlign: 'left', paddingLeft: '20px'}}>
                    <TextField 
                        fullWidth
                        required 
                        id="standard-required" 
                        label="Title" 
                        variant="filled"
                        value={this.props.info.title}
                        onChange={(e)=> { this.props.ChangeTitle(e.target.value) }}
                        style={styles.titleFieldStyle}/>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={2}>
                    <Button style={styles.saveButtonStyle} 
                    disabled={!this.props.info.title || !this.props.info.time || !this.props.info.description || !this.props.info.directions}
                    onClick={this.handleClick}>
                        SAVE
                    </Button>
                </Grid>
            </Grid>
        );
    }
}