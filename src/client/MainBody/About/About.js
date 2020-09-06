import React, { Component } from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import BYTEBOOK_COLORS from "../../utils/colors";

const styles = theme => ({
    textStyle: {color: BYTEBOOK_COLORS.GREEN, paddingBottom: "30px"},
    paragraphStyle:{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "50px",
        paddingRight: "70px", 
        fontFamily: "Times New Roman",
        fontSize: "25px",
    },
});

class About extends Component {
    render(){
        const { classes } = this.props;
        return(
        <div>
        <Paper>
            <Typography className={classes.textStyle} variant="h4">
                About BYTEBOOK
            </Typography>
            <div style= {{paddingLeft: '50px', paddingRight: '70px'}}>
                <Parallax
                blur={1}
                bgImage={'http://glutenfreedelivers.com/template/images/white/glutenfree4.jpg'}
                bgImageAlt="about food"
                strength={1000}>
                <div style={{ height: '300px' }} />
            </Parallax>
            </div>
            <div className={classes.paragraphStyle}>
            <p align="left" className={classes.textStyle}>
            Growing up, I always found that my family would collect so many pieces of heritage. Most importantly, they would pass down cookbooks. 
            These books had a way of expressing love and creativity at the same time. There was always a story behind each of them. Whether it was 
            a grandparent sharing their long secret recipies with others in their family get-togethers or the chef longing to experience their 
            passion with a loved one. These stories always filled my mind when I would look at these pieces of history gather dust in my cupboards. <br />
            <br />
            These stories became more and more true as I began a jorney of cooking on a moderate budget. I would develop tastes and experiences as 
            I would expand my cooking forte. Over time, I to found myself wanting to share my recipes with friends and family. Not only did I want 
            to share with cook, but I wanted to gain knowledge at that particular pace as well. I had bakery gurus, bartending wizards, and 
            vegitarian lifestyles I wanted to learn from. However, the days of sharing lifestyles on paper has passed.<br />
            <br />
            I developed BYTEBOOK to create an environment where cookbooks, and recipes can be shared with anybody from anywhere in the world. 
            Accessing information has never been easier then now. Why shouldn't food be the same way? So share away as we create a new cooking 
            experience for ourselves! <br />
            Thanks,<br />
            <br />
            Sean<br />
            </p>
            </div>
        </Paper>
        <div style={{paddingTop: "20px"}}/>
        </div>
    );
    }
}

export default withStyles(styles)(About);