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
            text: 'In a war ruined country, some scientists tried to create the perfect soldier, but they didn\'t want humans to fight the wars; so, they started to experiment on bears! But when their studies finally culminated on the most intelligent bear soldier, it didn\'t want any part of that, so BomBear is trying to escape the lab and its creator..',
            shortDesc: 'In a war ruined country, some scientists tried to create the perfect soldier',
            image: 'bb.png',
            bgColor: '#1f2139'
        },
        {
            title: 'Shape Escape',
            id: 'shapeescape',
            text: 'This is a puzzle/platformer where you control 5 shapes that want to escape their imprisonment, but they will soon realize that to achieve that, some of them will need to SACRIFICE for the greater good, in the end only a few of them will survive.',
            shortDesc: 'This is a puzzle/platformer where you control 5 shapes that want to escape their imprisonment.',
            image: 'shpesc2.png',
            bgColor: '#bdd2c7'
        },
        {
            title: 'Curse of the Dark Tower',
            id: 'curseofthedarktower',
            text: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015. The Curse of the Dark Tower is a game that we started on july 9 and that we finish today, just a day before the deadline, we are very happy with the obtained result. We invite you all to try out our game, you can download it for free in the link below. Wish us luck.',
            shortDesc: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015.',
            image: 'cotdt.png',
            bgColor: '#181e1b'
        }
    ]);

    let tiles: any[] = [];
    if(match.isExact) {
        tiles = games.map(game => {
            return <Tile {...game} url={`${match.path}/${game.id}`}></Tile>
        });
    }

    return (
        <div className={classes.Section}>
        <Switch>
            {games.map(game => {
                return (
                <Route path={`${match.path}/${game.id}`}>
                    <h2>{game.title}</h2>
                    <p>{game.text}</p>
                </Route>
                );
            })}
        </Switch>
        {tiles}
        </div>
    );
};

export default Games;