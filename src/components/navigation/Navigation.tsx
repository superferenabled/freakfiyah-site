import React from "react";
import { Link } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation: React.FC = (props: any) => {
  return (
    <ul className={classes.Navigation}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/games">Games</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navigation;
