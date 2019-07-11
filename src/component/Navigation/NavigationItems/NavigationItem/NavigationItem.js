import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';

const navigationItem = ({ link, exact, children }) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={classes.active}
    >
      {children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  exact: PropTypes.bool,
  children: PropTypes.string
};

export default navigationItem;
