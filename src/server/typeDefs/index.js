const { query } = require('../query');
const { homeType, faqType } = require('./types');

const typeDefs = [query, homeType, faqType];

module.exports = {
  typeDefs
};
