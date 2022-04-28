const { all, takeLatest } = require('redux-saga/effects');

const {
  FETCH_TASKS_REQUEST
} = require('./modules/tasks/types');

const { fetchTasks } = require('./modules/tasks/sagas');

function* rootSaga() {
  return yield all([
    takeLatest(FETCH_TASKS_REQUEST, fetchTasks)
  ]);
}

module.exports = rootSaga;
