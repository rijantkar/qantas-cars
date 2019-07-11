const { homepage } = require('../data');

class Home {
  static all() {
    return homepage;
  }
}

module.exports = {
  Home
};
