import React from 'react';
import {TextField, withStyles } from '@material-ui/core';
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    directionFieldStyle: {
        textAlign: 'left',
        width: "70%",
    },
    textFieldColor: {
        color: BYTEBOOK_COLORS.GREY,
    }
};

function CreateDirections(props) {
    const { classes } = props;
    return(
        <div style={{paddingLeft:'20px', paddingBottom:'20px'}}>
            <TextField 
            required 
            id="standard-multiline-flexible" 
            label="Directions" 
            multiline
            variant="filled"
            rows={8}
            value={props.info.directions}
            onChange={(e) => {props.ChangeDirections(e.target.value)}}
            className={classes.directionFieldStyle}/>
        </div>
    );
}

export default withStyles(styles) (CreateDirections);