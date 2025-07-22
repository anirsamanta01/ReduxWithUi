import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QTY } from './constant';

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const updateQty = (id, qnt) => ({
  type: UPDATE_QTY,
  payload: { id, qnt },
});

