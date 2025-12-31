import { BUY_ACTION, PLACE_ORDER } from "../action/types";

export interface BuyAction {
  type: string;
  payload: any;
}

export type buyReducerState = {
  //   buy_now_product: any[];
  buy_product: any[];
  ordered_products: any[];
};

const initialState: buyReducerState = {
  //   buy_now_product: [],
  buy_product: [],
  ordered_products: [],
};

const BuyReducer = (state = initialState, action: BuyAction) => {
  switch (action.type) {
    case BUY_ACTION:
      return { ...state, buy_product: action.payload };

    // case BUY_NOW_ACTION:
    //   return { ...state, buy_now_product: action.payload };

    case PLACE_ORDER:
      return { buy_product: [], ordered_products: state.buy_product };

    default:
      return state;
  }
};

export default BuyReducer;
