/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
  */




import { addTodo, toggleTodo, setVisibilityFilter, changePerson, VisibilityFilters } from './actions/index';
import todoApp from './reducers';
import { createStore } from 'redux';

let store = createStore(todoApp);
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addTodo('set up my redux application'));
store.dispatch(addTodo('add some react view'));
store.dispatch(addTodo('add some routing and auth'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
store.dispatch(changePerson('Benjamin'));
unsubscribe();

                                  

                                  
