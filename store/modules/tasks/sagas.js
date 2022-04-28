const { call, put } = require('redux-saga/effects');
const api = require('../../../services/api');

const { fetchTasksSuccess, fetchTasksFailure } = require('./actions');

function* fetchTasks() {
  try {
    const { data } = yield call(api.get, 'http://localhost:3000/tasks');

    yield put(fetchTasksSuccess({ data }));
  } catch (error) {
    yield put(fetchTasksFailure({ error }));
  }
}

module.exports = {
  fetchTasks
};
