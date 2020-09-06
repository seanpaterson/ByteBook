import React from 'react';
import { Paper, Button, Grid, TextField, Typography, Menu, MenuItem, withStyles } from '@material-ui/core';
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    gridStyle:{
        paddingTop: "10px",
        paddingBottom:'20px',
    },
    timeFieldStyle: {
        width: "100%",
        paddingRight: "1px"
    },
    servingFieldStyle: {
        width: "100%",
        paddingRight: '20px',
    },
};

const servings = [1, 2, 3, 4, 5, 6, 7, 8];
const units = ["min","hr"];

export default function CreateBasicInfo(props) {
    const { classes } = props;
    return(
        <Grid container style={styles.gridStyle}>
                            <Grid item xs={3} style={{paddingLeft:"20px"}}>
                                <TextField 
                                required 
                                id="standard-number" 
                                label="Cook Time" 
                                variant="filled"
                                value={props.info.time}
                                onChange={(e)=> { props.ChangeTime(e.target.value) }}
                                style={styles.timeFieldStyle}/>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField 
                                required 
                                select
                                id="demo-mutiple-checkbox" 
                                variant="filled"
                                value={props.info.timeUnit}
                                onChange={(e)=> { props.ChangeTimeUnit(e.target.value) }}
                                style={styles.servingFieldStyle}>
                                        {units.map((unit) => (
                                            <MenuItem key={unit} value={unit}>
                                                {unit}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField 
                                required 
                                select
                                id="demo-mutiple-checkbox" 
                                label="Servings" 
                                variant="filled"
                                value={props.info.servings}
                                onChange={(e)=> { props.ChangeServings(e.target.value) }}
                                style={styles.servingFieldStyle}>
                                        {servings.map((serving) => (
                                            <MenuItem key={serving} value={serving}>
                                                {serving}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                        </Grid>
    );
}