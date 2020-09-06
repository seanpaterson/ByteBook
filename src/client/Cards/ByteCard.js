import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BYTEBOOK_COLOR from "../utils/colors";
import './ByteCard.css';

const styles = {
    media: {
        height: 150,
        width: '100%',
        borderRadius:"25px"
    },
    cardWidth: {
        maxWidth: 300,
        width:345
    },
    cardBounds: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    nameText: {
        textAlign:'left',
        fontFamily: "Segoe Script",
        paddingLeft: '10px',
        fontSize: "20px",
        color: BYTEBOOK_COLOR.WHITE,
        background: BYTEBOOK_COLOR.GREEN,
        width: '100%',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
        height:'30px',
        lineHeight: '30px'
    },
    authorText: {
        textAlign:'left',
        fontFamily: "Times New Roman",
        paddingLeft: '10px',
        fontSize: "15px",
        color: BYTEBOOK_COLOR.GREY,
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
        width: 250,
        height:'20px',
    },
    rateText: {
        textAlign:'right',
        paddingRight: '110px',
        fontFamily: "Times New Roman",
        fontSize: "20px",
        color: BYTEBOOK_COLOR.GOLD,
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
        width: 250,
        height:'30px',
    }
};

export default function ByteCard(props) {
    const classes = styles;
    return(
        <div className="card">
            <Card style={classes.cardWidth}>
                <div style={styles.cardBounds}>
                <CardMedia
                            style={classes.media}
                            image={props.byte.image}
                            title={props.byte.name}
                />
                </div>
            <Typography style={styles.nameText}>{props.byte.name}</Typography>
            <div>
                <Grid container>
                    <Grid item sm={6}>
                    <Typography style={styles.authorText}>By {props.byte.user}</Typography>
                    <Typography style={styles.authorText}>{props.byte.time}</Typography>
                    </Grid>
                    <Grid item sm={6}>
                    <br />
                    <Typography style={styles.rateText}>Rate: {props.byte.rating}/5</Typography>
                    </Grid>
                </Grid>
            </div>
            </Card>
        </div>
    );
}