const {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = require('./types');

const incrementCounter = (incrementer = 1) => ({
  type: INCREMENT_COUNTER,
  incrementer
});

const decrementCounter = (incrementer = 1) => ({
  type: DECREMENT_COUNTER,
  incrementer
});

module.exports = {
  incrementCounter,
  decrementCounter
};
