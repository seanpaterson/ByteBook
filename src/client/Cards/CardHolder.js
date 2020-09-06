import React, { Component } from 'react';
import ByteCard from "./ByteCard";

const style = {
    innerBox: {
        display: 'flex', 
        flexDirection:'row', 
        flex: 1, 
        flexWrap:'wrap'
    },
};

export default class CardHolder extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style= {style.innerBox}>
                {
                    this.props.bytes.map(function(byte){
                        return (
                            <div key={byte.id}>
                                <ByteCard byte={byte}/>
                            </div>);
                    })
                }
            </div>
        );
    }
}