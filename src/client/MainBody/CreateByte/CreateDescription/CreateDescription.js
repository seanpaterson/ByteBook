import React from 'react';
import {TextField, withStyles } from '@material-ui/core';
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    descriptionFieldStyle: {
        textAlign: 'left',
        width: "70%",
    },
    textFieldColor: {
        color: BYTEBOOK_COLORS.GREY,
    }
};

function CreateDescription(props) {
    const { classes } = props;
    return(
        <div style={{paddingLeft:'20px', paddingBottom:'20px'}}>
            <TextField 
            required 
            id="standard-multiline-flexible" 
            label="Description" 
            multiline
            variant="filled"
            rows={4}
            value={props.info.description}
            onChange={(e) => {props.ChangeDescription(e.target.value)}}
            className={classes.descriptionFieldStyle}/>
        </div>
    );
}

export default withStyles(styles) (CreateDescription);