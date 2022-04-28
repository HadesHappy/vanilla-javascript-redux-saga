const {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} = require('./types');

const initialState = require('./state');

const reducer = (state = initialState, { type, data, error }) => {
  switch(type) {
    case FETCH_TASKS_REQUEST: return {
      ...state,
      loading: true
    };

    case FETCH_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: data,
        loading: false,
        error: false
      };
    }

    case FETCH_TASKS_FAILURE: return {
      ...state,
      loading: false,
      error: error
    };

    default: return state;
  }
};

module.exports = reducer;
