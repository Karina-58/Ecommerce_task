import {
  ADD_TO_CART,
  DECREMENT_PRODUCT,
  EMPTY_CART,
  GET_PRODUCTS,
  INCREMENT_PRODUCT,
  REMOVE_FROM_CART,
} from "../action/types";

export type actionType = {
  type: string;
  payload?: any;
};

export type productObj = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem = {
  id: number;
  totalNumber: number;
};

export type productState = {
  products: productObj[];
  cartItems: CartItem[];
};

const initialstate: productState = {
  products: [],
  cartItems: [],
};

const ProductReducer = (state = initialstate, action: actionType) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { id: action.payload, totalNumber: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id == action.payload)
            return { ...item, totalNumber: item.totalNumber + 1 };
          else return item;
        }),
      };

    case DECREMENT_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id == action.payload)
            return { ...item, totalNumber: item.totalNumber - 1 };
          else return item;
        }),
      };

    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
export default ProductReducer;
