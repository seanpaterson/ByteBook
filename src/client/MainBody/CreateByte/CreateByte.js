import React, { Component } from 'react';
import { Paper, Button, Grid, TextField, Typography, withStyles } from '@material-ui/core';
import PhotoButton from './PhotoButton/PhotoButton';
import SaveButton from './SaveButton/SaveButton';
import CreateBasicInfo from './CreateBasicInfo/CreateBasicInfo';
import CreateDescription from './CreateDescription/CreateDescription';
import CreateDirections from './CreateDirections/CreateDirections';
import CreateIngredients from './CreateIngredients/CreateIngredients';
import ByteBook from "../../http/ByteBook";
import BYTEBOOK_COLORS from "../../utils/colors";

const styles = {
    gridStyle:{
        paddingTop: "10px",
        paddingBottom:'20px'
    },
    textFieldColor: {
        color: BYTEBOOK_COLORS.GREY,
    }
};

class CreateByte extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: false,
            title: '',
            time:'',
            timeUnit:"min",
            servings: 1,
            description: '',
            directions:'',
            ingredients:[]
        };
        this.AddImage = this.AddImage.bind(this);
        this.ChangeTitle = this.ChangeTitle.bind(this);
        this.ChangeTime = this.ChangeTime.bind(this);
        this.ChangeTimeUnit = this.ChangeTimeUnit.bind(this);
        this.ChangeServings = this.ChangeServings.bind(this);
        this.ChangeDescription = this.ChangeDescription.bind(this);
        this.ChangeDirections = this.ChangeDirections.bind(this);
        this.AddIngredient = this.AddIngredient.bind(this);
        this.DeleteIngredient = this.DeleteIngredient.bind(this);
    }
    AddImage(image){
        this.setState({
            image:URL.createObjectURL(image)
        });
    }
    ChangeTitle(title){
        this.setState({
            title:title
        });
    }
    ChangeTime(time){
        this.setState({
            time:time
        });
    }
     ChangeTimeUnit(timeUnit){
        this.setState({
            timeUnit:timeUnit
        });
    }
    ChangeServings(servings){
        this.setState({
            servings:servings
        });
    }
    ChangeDescription(description){
        this.setState({
            description:description
        });
    }
    ChangeDirections(directions){
        this.setState({
            directions:directions
        });
    }
    AddIngredient(name, measurement){
        this.setState({
            ingredients:[...this.state.ingredients,{name:name,measurement:measurement}]
        });
    }
    DeleteIngredient(name){
        var array = this.state.ingredients;
        var index = -1;
        array.map((ingredient,key) => {
            if(name === ingredient.name)
                index = key;
        });
        if(index !== -1) {
            array.splice(index,1);
            this.setState({ingredients:array});
        }
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
    render(){
        const { classes } = this.props;
        return (
            <div>
                <PhotoButton info={this.state} AddImage={this.AddImage}/>
                <div className={classes.gridStyle}>
                        <Grid container>
                                <Grid item xs={12} style={{textAlign: 'left'}}>
                                    <Paper>
                                        <SaveButton info={this.state}
                                            ChangeTitle={this.ChangeTitle}/>
                                        <CreateBasicInfo info={this.state}  
                                            ChangeTime={this.ChangeTime} 
                                            ChangeTimeUnit={this.ChangeTimeUnit} 
                                            ChangeServings={this.ChangeServings}/>
                                        <CreateDescription info={this.state}
                                            ChangeDescription={this.ChangeDescription}/>
                                        <CreateIngredients info={this.state}
                                            ingredients={this.state.ingredients}
                                            AddIngredient={this.AddIngredient}
                                            DeleteIngredient={this.DeleteIngredient}/>
                                        <CreateDirections info={this.state}
                                            ChangeDirections={this.ChangeDirections}/>
                                    </Paper>
                                </Grid>
                        </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CreateByte);