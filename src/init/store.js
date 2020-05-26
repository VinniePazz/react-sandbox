import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
// import { logger } from '../middleware/logger';

const configureStore = () => {
  const middleware = [thunk];

  // if (process.env.NODE_ENV !== 'production') {
  //   middleware.push(logger);
  // }

  const middlewareEnhancer = applyMiddleware(...middleware);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default configureStore();
