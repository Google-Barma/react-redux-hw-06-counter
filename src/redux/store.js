import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return state + payload.increment;

    case 'counter/Decrement':
      return state - payload.decrement;

    default:
      return state;
  }
};

const stepReducer = (state = 5, { type, payload }) => {
  switch (type) {
    case 'counter/Step':
      return payload.stepValue;

    default:
      return state;
  }
};

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
