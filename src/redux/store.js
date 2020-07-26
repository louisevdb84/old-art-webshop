const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");
const { applyMiddleware, createStore } = require("redux");

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;