import React from 'react';
import classes from './Footer.module.scss';

const Footer: React.FC = (props: any) => {
    return (
        <div className={classes.Footer}>
            <span className={classes.CopyRight}>Freakfire all rights reserved &reg;</span>
        </div>
    );
};

export default Footer;