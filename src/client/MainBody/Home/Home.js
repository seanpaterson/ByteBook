import React, { Component } from 'react';
import Login from './Login/Login'
import { Paper, Typography, withStyles } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import BYTEBOOK_COLORS from "../../utils/colors";

const styles = theme => ({
    textStyle: {color: BYTEBOOK_COLORS.GREEN, paddingBottom: '30px'},
    paragraphStyle:{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "50px",
        paddingRight: "70px", 
        fontFamily: "Times New Roman",
        fontSize: "25px",
    }
});

class Home extends Component {
    render(){
        const { classes } = this.props;
        return(
        <div>
            <Paper>
                <Typography className={classes.textStyle} variant="h4">
                    Welcome to BYTEBOOK
                </Typography>
                <div style= {{paddingLeft: '50px', paddingRight: '70px', paddingBottom: '20px'}}>
                    <Parallax
                        bgImage={'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg'}
                        bgImageAlt="about food"
                        strength={1}>
                        <div style={{ height: '300px' }} />
                    </Parallax>
                </div>
            </Paper>
            <div>
                <Login />
            </div>
        </div>
    );
    }
}

export default withStyles(styles)(Home);