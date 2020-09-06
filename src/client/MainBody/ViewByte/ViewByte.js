import React, { Component } from 'react';
import { Paper, Typography, Grid, withStyles } from '@material-ui/core';
import ByteBook from "../../http/ByteBook";
import ViewPhoto from "./ViewPhoto";

const styles = {
    boxStyle: {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: "10px",
        paddingBottom:'20px'
    },
    titleStyle: {
        justifyContent: 'left',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden',
        paddingTop: "10px",
        paddingBottom:'20px'
    },
    basicInfoStyle:{
        justifyContent: 'left',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textAlign:'left',
        paddingTop: "10px",
        paddingBottom:'20px'
    },
    descriptionStyle:{
        justifyContent: 'left',
        textAlign:'left',
        paddingTop: "10px",
        paddingBottom:'20px'
    }
};

class ViewByte extends Component {
    constructor(props){
        super(props);
        let byteID = window.location.href;
        byteID = byteID.substring(byteID.lastIndexOf('/') + 1);
        this.state= {
            byteID: byteID,
            byte: null,
            doesExist: false
        };
    }
    componentWillMount(){
        ByteBook.getByte(this.state.byteID).then(result => {
            console.log(result);
            this.setState({
                byte: result,
                doesExist: true
            });
        });
    }
    render(){
        return(
            <div>
             {this.state.doesExist ?
             <div style={styles.boxStyle}>
                 <Grid container>
                    <ViewPhoto/>
                    <Paper style={{width: '100%', paddingTop: '20px'}}>
                        <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                            <Typography variant="h5" style= {styles.titleStyle}>{this.state.byte.title} </Typography>
                            <Grid container>
                                <Grid item xs={2} style={styles.basicInfoStyle}>
                                    Servings: {this.state.byte.servings}
                                </Grid>
                                <Grid item xs={1} style={styles.basicInfoStyle}>
                                    {this.state.byte.timeAmount} {this.state.byte.timeUnit ? 'min' : 'hr'}
                                </Grid>
                            </Grid>
                            <Grid container style={styles.descriptionStyle}>
                                {this.state.byte.description}
                            </Grid>
                            <div container style={styles.descriptionStyle}>
                                {this.state.byte.ingredients.map((ingredient) =>
                                    <li>{ingredient.ingredient_measurement} {ingredient.ingredient_name}</li>
                                )}
                            </div>
                            <Grid container style={styles.descriptionStyle}>
                                {this.state.byte.directions}
                            </Grid>
                        </div>
                    </Paper>
                 </Grid>
             </div>
             : <div></div>}
            </div>
        );
    }
}

export default ViewByte;