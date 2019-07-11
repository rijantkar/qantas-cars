const { Home } = require('../models');

const homeResolvers = {
  Query: {
    home: () => Home.all()
  }
};

module.exports = {
  homeResolvers
}
