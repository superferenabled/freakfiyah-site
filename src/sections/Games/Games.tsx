import React, {useState} from 'react';
import classes from './Games.module.scss';
import Tile from '../../components/tile/Tile';

const Games: React.FC = (props: any) => {

    const [games, setGames] = useState([
        {
            title: 'Curse of the Dark Tower',
            text: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015. The Curse of the Dark Tower is a game that we started on july 9 and that we finish today, just a day before the deadline, we are very happy with the obtained result. We invite you all to try out our game, you can download it for free in the link below. Wish us luck.',
            image: 'image.jpg'
        },
        {
            title: 'Curse of the Dark Tower',
            text: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015. The Curse of the Dark Tower is a game that we started on july 9 and that we finish today, just a day before the deadline, we are very happy with the obtained result. We invite you all to try out our game, you can download it for free in the link below. Wish us luck.',
            image: 'image.jpg'
        },
        {
            title: 'Curse of the Dark Tower',
            text: 'We are very excited to announce that we will participate in the Indie Game Maker Contest 2015. The Curse of the Dark Tower is a game that we started on july 9 and that we finish today, just a day before the deadline, we are very happy with the obtained result. We invite you all to try out our game, you can download it for free in the link below. Wish us luck.',
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