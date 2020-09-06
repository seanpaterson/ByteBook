import React, { Component }from 'react';
import {TextField, Button, Grid, Typography, Chip } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    buttonStyles: {
        background: BYTEBOOK_COLORS.GREEN,
        color: BYTEBOOK_COLORS.WHITE,
        paddingRight:'20px',
        height: '100%',
        width: '100%'
    },
    nameFieldStyle: {
        paddingRight:'20px',
        width: '100%'

    },
    amountFieldStyle: {
        width:'100%'
    },
    ingredientBoxStyle: {
        background:BYTEBOOK_COLORS.HOVER_GREY,
        width: '70%',
        height: '200px',
        maxHeight: '200px',
        paddingRight: "20px",
        overflowY:'auto',
    },
    chipStyle: {
        background: BYTEBOOK_COLORS.CORAL,
        color:BYTEBOOK_COLORS.WHITE,
        justifyContent: 'left',
        width:'100%',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
    }
};

class CreateIngredients extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            measurement: ''
        }
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeMeasurement = this.ChangeMeasurement.bind(this);
        this.onAccept = this.onAccept.bind(this);
    }
    ChangeName(name) {
        this.setState({
            name: name
        });
    }
    ChangeMeasurement(measurement) {
        this.setState({
            measurement: measurement
        });
    }
    onAccept(e) {
        if(this.state.name !== '' && this.state.measurement !== '')
        {
            this.props.AddIngredient(this.state.name, this.state.measurement);
            this.setState({
                name:'',
                measurement:''
            });
        }
    }
    render() {
        return(
            <div style={{paddingLeft:'20px', paddingBottom:'20px'}}>
                <Typography>Ingredients</Typography>
                <Grid container style={{paddingBottom:'20px'}}>
                    <Grid item xs={3}>
                                                <TextField 
                        id="standard-multiline-flexible" 
                        label="Measurement" 
                        variant="filled"
                        value={this.state.measurement}
                        onChange={(e) => {this.ChangeMeasurement(e.target.value)}}
                        style={styles.amountFieldStyle}/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField 
                        id="standard-multiline-flexible" 
                        label="Name"
                        variant="filled"
                        value={this.state.name}
                        onChange={(e) => {this.ChangeName(e.target.value)}}
                        style={styles.nameFieldStyle}/>
                    </Grid>
                    <Grid item xs={1} style={{paddingTop:'5px', paddingBottom:'5px'}}>
                        <Button onClick={this.onAccept} style={styles.buttonStyles}>ADD</Button>
                    </Grid>
                </Grid>
                <Grid container style={{paddingRight: '20px'}}>
                    <Grid item xs={12}>
                        <div style={styles.ingredientBoxStyle}>
                        {this.props.ingredients.map((ingredient, i) => (
                            <div key={i} style={{paddingBottom:"5px"}}>
                                <Chip
                                    style={styles.chipStyle}
                                    label={ingredient.measurement + " " + ingredient.name}
                                    clickable
                                    icon={<CancelIcon />}
                                    onClick={(e) => {this.props.DeleteIngredient(ingredient.name)}}
                                    />
                                <br />
                            </div>
                        ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CreateIngredients;