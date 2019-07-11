const { Faqs } = require('../models');

const faqsResolvers = {
  Query: {
    faqs: () => Faqs.all()
  }
};

module.exports = {
  faqsResolvers
}
