import React, {useState} from 'react';
import classes from './Games.module.scss';
import Tile from '../../components/tile/Tile';

const Games: React.FC = (props: any) => {

    const [games, setGames] = useState([
        {
            title: 'Curse of the Dark Tower',
            text: 'bla blah',
            image: 'image.jpg'
        },
        {
            title: 'Curse of the Dark Tower',
            text: 'bla blah',
            image: 'image.jpg'
        },
        {
            title: 'Curse of the Dark Tower',
            text: 'bla blah',
            image: 'image.jpg'
        }
    ]);

    return (
        <div className={classes.Section}>
            {games.map(game => {
                return <Tile {...game}></Tile>
            })}
            
        </div>
    );
};

export default Games;