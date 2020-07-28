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
};

const Tile: React.FC<Game> = (props) => {
    return (
        <Link className={classes.TileLink} to={props.url}>
        <div className={classes.Tile}>
            <span className={classes.Image}><img src={`./${props.image}`} alt={props.image}></img></span>
            <span className={classes.Info}>
                <span className={classes.Title}>{props.title}</span>
                <span className={classes.Text}>{props.shortDesc}</span>
            </span>
        </div>
        </Link>
    );
};

export default Tile;