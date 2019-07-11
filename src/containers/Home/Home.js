import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import classes from './Home.module.css';
import { GET_FAQS_CMS } from '../../server/query/queires';
import ErrorBoundary from '../../App';
import Faqs from '../Faqs/Faqs';

const faqs = 'Faqs';

const home = ({ data }) => {
  return (
    <div className={classes.Container} style={{ background: `url(${data.heroImageUrl}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
      <div className={classes.Heading}>{data.heading}</div>
      <div className={classes.Subheading}>
        {`${data.subheading}, Learn more `}
        <Link to="/faqs">here</Link>
      </div>
      <Route
        path="/faqs"
        exact
        component={() => (
          <Query query={GET_FAQS_CMS}>
            {({ res, loading, error }) => {
              if (!loading) {
                return (
                  <ErrorBoundary component={faqs}>
                    <Faqs data={res.faqs} />
                  </ErrorBoundary>
                );
              }
              if (error) {
                return (
                  <pre>
                    Bad:
                    {error.graphQLErrors.map(({ message }, i) => (
                      <span key={i}>{message}</span>
                    ))}
                  </pre>
                );
              }
              return null;
            }}
          </Query>
        )}
      />
    </div>
  );
};

home.propTypes = {
  data: PropTypes.object
};

export default home;
