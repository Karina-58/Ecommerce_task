import { getProducts } from "../../state/action/Action";
import { getAPI } from "./api";
import type { Dispatch } from "redux";

export const getProductData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getAPI("https://fakestoreapi.com/products");
      dispatch(getProducts(response));
    } catch (error) {
      console.error(error);
    }
  };
};
