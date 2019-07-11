const { gql } = require('apollo-server');

const faqType = gql`
  type Faq {
    title: String
    body: String
  }
`;

module.exports = {
  faqType
};
