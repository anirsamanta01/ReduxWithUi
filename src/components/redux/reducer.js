import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QTY } from './constant';

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      let newState = state.filter(item => item.id !== action.payload);
      return [...newState];
    case UPDATE_QTY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, qnt: action.payload.qnt }
          : item,
      );

    default:
      return state;
  }
};
