import React, {useState} from 'react';
import classes from './Games.module.scss';
import Tile from '../../components/tile/Tile';
import {
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";

const Games: React.FC = (props: any) => {
    let match = useRouteMatch();

    const [games, setGames] = useState([
        {
            title: 'Bombear',
            id: 'bombear',
            text: 'blah blah bombear stuff.',
            shortDesc: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015.',
            image: 'bb.png'
        },
        {
            title: 'Shape Escape',
            id: 'shapeescape',
            text: 'blah blah shape escape stuff.',
            shortDesc: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015.',
            image: 'shpesc.png'
        },
        {
            title: 'Curse of the Dark Tower',
            id: 'curseofthedarktower',
            text: 'blah blah curse of the dark tower stuff.',
            shortDesc: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015.',
            image: 'cotdt.png'
        }
    ]);

    return (
        <div className={classes.Section}>
        <Switch>
            {games.map(game => {
                return (
                <Route path={`${match.path}/${game.id}`}>
                    <div>{game.title}</div>
                    <div>{game.text}</div>
                </Route>
                );
            })}
        </Switch>

        {games.map(game => {
            return <Tile {...game} url={`${match.path}/${game.id}`}></Tile>
        })}
        </div>
    );
};

export default Games;