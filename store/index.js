const { createStore, applyMiddleware } = require('redux');
const createSagaMiddleware = require('redux-saga');

const sagaMiddleware = createSagaMiddleware.default();

const rootReducer = require('./rootReducer');
const rootSaga = require('./rootSaga');

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

module.exports = store;
