import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Faqs from './containers/Faqs/Faqs';
import { GET_HOME_PAGE_CMS, GET_FAQS_CMS } from './server/query/queires';
import routes from './routes';
import ErrorBoundary from './containers/ErrorBoundary';

const home = 'Home';
const faqs = 'Faqs';

function App() {
  return (
    <Layout routes={routes}>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Query query={GET_HOME_PAGE_CMS} errorPolicy="all">
              {({ data, loading, error }) => {
                if (!loading) {
                  return (
                    <ErrorBoundary component={home}>
                      <Home data={data.home} />
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
        <Route
          path="/faqs"
          exact
          component={() => (
            <Query query={GET_FAQS_CMS}>
              {({ data, loading, error }) => {
                if (!loading) {
                  return (
                    <ErrorBoundary component={faqs}>
                      <Faqs data={data.faqs}/>
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
      </Switch>
    </Layout>
  );
}

export default App;
