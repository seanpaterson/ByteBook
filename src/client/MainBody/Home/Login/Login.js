import React from "react";
import { Component } from "react";
import { Paper, Typography, TextField, withStyles, Button } from '@material-ui/core';
import ByteBook from "../../../http/ByteBook";
import BYTEBOOK_COLORS from "../../../utils/colors";

const styles = {
    textStyle: {
        color: BYTEBOOK_COLORS.GREEN
    },
    buttonStyle: {
        color: BYTEBOOK_COLORS.WHITE, 
        backgroundColor: BYTEBOOK_COLORS.GREEN,
        "&:hover": {
            backgroundColor: "#387728"
        }
    }
};

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "username",
            password: "password",
            loggedIn: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let loginInfo = {username: this.state.username, password: this.state.password};
        if(this.state.username == null || this.state.username == '' || this.state.password == null || this.state.password == '')
            return;
        ByteBook.login(loginInfo).then(status => {
            if(status == 0)
                window.location = '';
        });
    }
    componentWillMount() {
        if(window.sessionStorage.token != null)
        {
            ByteBook.auth().then(authenticated => {
                console.log(authenticated);
                if(authenticated == 1)
                    this.setState({loggedIn:1});
            })
        }
    }
    render() {
        const { classes } = this.props;
        return (
        <div>
            {this.state.loggedIn ? <div></div> :
            <Paper>
                <div style = {{paddingBottom: '30px'}}>
                <Typography className={classes.textStyle} variant="h7">
                    Please Log In
                </Typography>
                <TextField
                    id="first-name"
                    label="Username"
                    value={this.state.username}
                    onChange={(e) => {this.setState({username:e.target.value})}}
                    margin="normal"
                />
                <br />
                <TextField
                    id="first-name"
                    label="Password"
                    value={this.state.password}
                    onChange={(e) => {this.setState({password:e.target.value})}}
                    margin="normal"
                />
                </div>
                <Button className={classes.buttonStyle} onClick={this.handleClick}>
                    Login
                </Button>
            </Paper>}
        </div>
        );
    }
}

export default withStyles(styles)(Login);