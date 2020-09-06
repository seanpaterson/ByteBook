import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BYTEBOOK_COLORS from "../utils/colors";

const styles = theme => ({
    root:{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    textColor: {color: BYTEBOOK_COLORS.WHITE},
    linkText: {textDecoration: "none"},
    AppBarInfo: {
        background: BYTEBOOK_COLORS.GREEN,
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1
    },
    TitleInfo: {
        padding: {
            paddingTop: "4%",
            paddingBottom: "1.5%",
            paddingRight: "0",
            paddingLeft: "0"
        }
    }
});

class Header extends Component{

    render() {
        const { classes } = this.props;
        return (
        <div style={{width: '100%'}}>
            <AppBar className= {classes.AppBarInfo}>
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={2}>
                    <Button color="inherit" >
                    <Link to="/" className={classes.linkText}>
                    <img src={require("../utils/images/bytebook logo white.png")} alt="bytebook" height="40" width="122"/>
                    </Link>
                    </Button>
                </Grid>
                <Grid item xs ={9}/>
                <Grid item xs={1}>
                    <IconButton color="inherit" aria-label="Menu">
                    <AccountCircle />
                    </IconButton>
                </Grid>
            </Grid>
            </AppBar>
        </div>
                );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);