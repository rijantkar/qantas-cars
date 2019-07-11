const { faqsResolvers } = require('./faqResolver');
const { homeResolvers } = require('./homeResolver');

const resolvers = [homeResolvers, faqsResolvers];

module.exports = {
  resolvers
};
