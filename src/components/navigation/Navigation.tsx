import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation: React.FC = (props: any) => {
  return (
    <div className={classes.Navigation}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/games">Games</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
