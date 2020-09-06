import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { ListItemIcon, ListItem, List, Drawer, ListItemText, IconButton, CssBaseline, withStyles, Typography } from '@material-ui/core';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AssignmentIcon from "@material-ui/icons/Assignment";
import  { Link } from "react-router-dom";
import BYTEBOOK_COLORS from "../utils/colors";

const drawerWidth = 170;

const styles = theme => ({
    linkText: {textDecoration: "none"},
    root: {
        display: "flex"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    iconColor: {color: BYTEBOOK_COLORS.WHITE},
    drawerColor: {background:BYTEBOOK_COLORS.GREEN},
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1
        }
    }
});

class SideBar extends Component {
    state = {
        open: false
    };

    toggleExtendSideBar = () => {
        if(this.state.open === true)
            this.setState({ open: false });
        else
            this.setState({ open: true });
    };
    render(){
        const { classes } = this.props;
        return(
    <div className={styles.root}>
    <CssBaseline />
    <Drawer 
    variant="permanent" 
    className={classNames(classes.drawer, {
        [classes.drawerOpen]: this.state.open,
        [classes.drawerClose]: !this.state.open
    })}
    classes = {{
        paper: classNames(classes.drawerColor,{
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
        })
    }}
    open= {this.state.open}>
            <List>
            <ListItem button>
                <ListItemIcon><HomeIcon color="inherit"/></ListItemIcon>
                <ListItemText>
                    <Typography>Home</Typography>
                </ListItemText>
            </ListItem>
        </List>
        <IconButton onClick={this.toggleExtendSideBar}>
              {this.state.open === true ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
        <List>
            <Link to="/" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon style={{paddingLeft:"8px"}}><HomeIcon className={classes.iconColor}/></ListItemIcon>
                <ListItemText>
                    <Typography className= {classes.iconColor} variant="h6">Home</Typography>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/about" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon style={{paddingLeft:"8px"}}><AssignmentIcon className={classes.iconColor}/></ListItemIcon>
                <ListItemText>
                    <Typography className= {classes.iconColor} variant="h6">About</Typography>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/mybytes" className={classes.linkText}>
            <ListItem button>
                <ListItemIcon style={{paddingLeft:"8px"}}><RestaurantIcon className={classes.iconColor}/></ListItemIcon>
                <ListItemText>
                    <Typography className= {classes.iconColor} variant="h6">My Bytes</Typography>
                </ListItemText>
            </ListItem>
            </Link>
        </List>
    </Drawer>
    </div>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme:true })(SideBar);