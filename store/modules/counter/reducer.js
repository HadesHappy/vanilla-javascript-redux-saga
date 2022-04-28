const {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = require('./types');

const initialState = require('./state');

const reducer = (state = initialState, { type, incrementer }) => {
  switch(type) {
    case INCREMENT_COUNTER: return {
      ...state,
      counter: state.counter + incrementer
    };

    case DECREMENT_COUNTER: return {
      ...state,
      counter: state.counter - incrementer
    };

    default: return state;
  }
};

module.exports = reducer;
