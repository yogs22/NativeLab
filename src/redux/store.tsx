import {createStore} from 'redux';

const intialState = {
  loading: false,
};

const reducer = (state = intialState, action: any) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
