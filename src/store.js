import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';


//create an object and compose allows us to use redux devtools that allows you to hae
//access to store and the data that store has
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

//passing root reducer here, which has all of the reducers in it, gives store access to all reducers
const store = createStore(rootReducer, {}, enhancers);

//important if we will be using the root reducer
if(module.hot) {
  module.hot.accept('./reducers/',() => {
   const nextRootReducer = require('./reducers/index').default;
   store.replaceReducer(nextRootReducer);
  });
}


export default store;