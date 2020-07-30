import React from 'react';
import {
    Link,
  } from "react-router-dom";
import classes from './Tile.module.scss';

type Game = {
    title: string;
    id: string,
    text: string;
    shortDesc: string;
    image: string;
    url: string;
    bgColor: string
};
//<img src={`./${}`} alt={props.image}></img>
const Tile: React.FC<Game> = (props) => {
    return (
        <Link className={classes.TileLink} to={props.url} id={props.id}>
        <div className={classes.Tile}>
            <span className={classes.Image} style={{backgroundImage: `url(${props.image})`, backgroundColor: props.bgColor}}></span>
            <span className={classes.Info}>
                <span className={classes.Title}>{props.title}</span>
                <span className={classes.Text}>{props.shortDesc}</span>
            </span>
        </div>
        </Link>
    );
};

export default Tile;