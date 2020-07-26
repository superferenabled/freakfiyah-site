import React from 'react';
import classes from './Tile.module.scss';

type Game = {
    title: string;
    text: string;
    image: string;
};

const Tile: React.FC<Game> = (props) => {
    return (
        <div className={classes.Tile}>
            <span className={classes.Image}>{props.image}</span>
            <span className={classes.Info}>
                <span className={classes.Title}>{props.title}</span>
                <span className={classes.Text}>{props.text}</span>
            </span>
        </div>
    );
};

export default Tile;