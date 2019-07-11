const { gql } = require('apollo-server');

const query = gql`
  type Query {
    home: Home
    faqs: [Faq]
  }
`;

module.exports = {
  query
};
