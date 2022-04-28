const store = require('./store');

const { incrementCounter, decrementCounter } = require('./store/modules/counter/actions');

const { fetchTasksRequest } = require('./store/modules/tasks/actions');

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('State updated', store.getState()));

store.dispatch(incrementCounter());

store.dispatch(incrementCounter());

store.dispatch(incrementCounter());

store.dispatch(decrementCounter());

store.dispatch(incrementCounter(8));

store.dispatch(fetchTasksRequest());

// unsubscribe();
