import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Faqs.module.css';
import backgroundImgSrc from '../../assets/qts.jpg';

function Faqs({ data }) {
  const [activeListItem, setActiveListItem] = useState(null);
  return (
    <div className={classes.Container} style={{ background: `url(${backgroundImgSrc}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
      <div className={classes.LeftPanel}>
        {!activeListItem && <div className={classes.Start}>Click your query, on the right Panel.</div>}
        {activeListItem && data.filter((item, index) => index + 1 === activeListItem).map((el, index) => {
          return (
            <div key={index + 1}>
              <div className={classes.Title}>{el.title}</div>
              <div className={classes.Body} dangerouslySetInnerHTML={{ __html: el.body }} />
            </div>
          );
        })}
      </div>
      <div className={classes.RightPanel}>
        <ul className={classes.List}>
          {data.map((item, index) => (
            <li
              key={index + 1}
              onClick={() => setActiveListItem(index + 1)}
              className={index + 1 === activeListItem ? classes.ActiveListItem : classes.ListItem}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.MobileOnly}>
        <ul className={classes.MobileList}>
          {data.map((item, index) => (
            <li
              key={index + 1}
              onClick={() => setActiveListItem(index + 1)}
              className={classes.MobileListItem}
            >
              <div className={classes.MobileTitle}>{item.title}</div>
              {index + 1 === activeListItem && <div className={classes.MobileBody} dangerouslySetInnerHTML={{ __html: item.body }} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Faqs.propTypes = {
  data: PropTypes.array
};

export default Faqs;
