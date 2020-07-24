import React from 'react';
import classes from './HeroHeader.module.scss';

const HeroHeader: React.FC = (props: any) => {
    return (
        <div className={classes.HeroHeader}>
            <div className={classes.bg1}></div>
        </div>
    );
};

export default HeroHeader;