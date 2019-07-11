import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

function Layout({ children, routes }) {
  const [showSideDrawer, setSideDrawer] = useState(false);
  return (
    <>
      <Toolbar drawerToggleClicked={() => setSideDrawer(!showSideDrawer)} routes={routes} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setSideDrawer(false)}
        routes={routes}
      />
      <main className={classes.Content}>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  routes: PropTypes.array
};

export default Layout;
