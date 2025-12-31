import BuyReducer from "./BuyReducer";
import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";

const Root = combineReducers({
  ProductReducer: ProductReducer,
  BuyReducer: BuyReducer,
});
export default Root;
