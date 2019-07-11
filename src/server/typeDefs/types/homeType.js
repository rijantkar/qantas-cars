const { gql } = require('apollo-server');

const homeType = gql`
  type Home {
    heading: String
    subheading: String
    heroImageUrl: String
  }
`;

module.exports = {
  homeType
};
