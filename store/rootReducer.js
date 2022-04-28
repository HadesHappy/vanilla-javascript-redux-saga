const { combineReducers } = require('redux');

const counter = require('./modules/counter/reducer');
const tasks = require('./modules/tasks/reducer');

const rootReducer = combineReducers({
  counter,
  tasks
});

module.exports = rootReducer;
