import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ routes }) => (
  <ul className={classes.NavigationItems}>
    {routes && routes.map(route => (<NavigationItem key={route.id} link={route.path} exact={route.exact}>{route.name}</NavigationItem>))}
  </ul>
);

navigationItems.propTypes = {
  routes: PropTypes.array
}

export default navigationItems;
