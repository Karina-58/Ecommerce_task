import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  BUY_NOW_ACTION,
  BUY_ACTION,
  PLACE_ORDER,
  GET_PRODUCTS,
  EMPTY_CART,
} from "./types";

export const addToCart = (data: any) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const getProducts = (data: any) => {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};
export const incrementProduct = (data: any) => {
  return {
    type: INCREMENT_PRODUCT,
    payload: data,
  };
};
export const decrementProduct = (data: any) => {
  return {
    type: DECREMENT_PRODUCT,
    payload: data,
  };
};
export const removeFromCart = (data: any) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
export const placeorder = () => {
  return {
    type: PLACE_ORDER,
  };
};
export const buynowAction = (data: any) => {
  return {
    type: BUY_NOW_ACTION,
    payload: data,
  };
};
export const buyAction = (data: any) => {
  return {
    type: BUY_ACTION,
    payload: data,
  };
};
