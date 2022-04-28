const {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} = require('./types');

const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
});

const fetchTasksSuccess = ({ data }) => ({
  type: FETCH_TASKS_SUCCESS,
  data
});

const fetchTasksFailure = ({ error }) => ({
  type: FETCH_TASKS_FAILURE,
  error
});

module.exports = {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure
};
