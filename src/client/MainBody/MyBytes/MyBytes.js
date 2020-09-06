import React, { Component } from 'react';
import { Paper, Typography, Grid, Button, withStyles } from '@material-ui/core';
import CardHolder from "../../Cards/CardHolder";
import ByteBook from "../../http/ByteBook";
import BYTEBOOK_COLORS from "../../utils/colors";

const styles = theme => ({
    textStyle: {
        color: BYTEBOOK_COLORS.GREEN, 
        paddingBottom: "30px"
    },
    paragraphStyle:{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "50px",
        paddingRight: "70px", 
        fontFamily: "Times New Roman",
        fontSize: "25px",
    },
    buttonStyle:{
        width:'100%',
        height: '100%',
        fontSize: "30px",
        background: BYTEBOOK_COLORS.GREEN,
        color: BYTEBOOK_COLORS.WHITE,
        '&:hover': {
            backgroundColor: BYTEBOOK_COLORS.HOVER_GREEN,
            color: '#FFF'
        }
    }
});

class MyBytes extends Component {
    constructor(props){
        super(props);
        this.state = {
            bytes: []
        };
    }
    componentWillMount(){
        if(window.sessionStorage.token == null)
            window.location = '/';
        else
        {
            ByteBook.auth().then(authenticated => {
                console.log(authenticated);
                if(authenticated != 1)
                    window.location = '/';
            })
        }
    }
    componentDidMount(){
        ByteBook.getBytes().then(results => {this.setState({
            bytes: results
        });
    });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Grid container>
                <Grid item xs={11}>
                <Paper>
                    <Typography className={classes.textStyle} variant="h4">
                        {this.props.AccountInfo.UserName}'s Bytes
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={1}>
                    <Button className={classes.buttonStyle} onClick={(e) => {window.location = '/createbyte'}}>
                        +
                    </Button>
                </Grid>
            </Grid>
            <CardHolder bytes={this.state.bytes}/>
            </div>
        );
    }
}

export default withStyles(styles)(MyBytes);