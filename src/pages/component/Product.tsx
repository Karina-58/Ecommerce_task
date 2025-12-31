import { useDispatch } from "react-redux";
import type { CartItem, productObj } from "../../state/reducer/ProductReducer";
import {
  addToCart,
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../../state/action/Action";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = ({
  data,
  cartItem,
}: {
  data: productObj;
  cartItem: CartItem[];
}) => {
  const dispatch: any = useDispatch();
  const [productDetail, setProductDetail] = useState<productObj>(data);
  const [open, setOpen] = useState(false);
  const cartAvailable: CartItem | null =
    cartItem.find((item) => item.id === data.id) ?? null;

  const onClickAddToCart = () => {
    dispatch(addToCart(data.id));
  };

  const onClickPlus = () => {
    dispatch(incrementProduct(data.id));
  };

  const onClickMinus = (cartAvailable: CartItem) => {
    if (cartAvailable.totalNumber == 1) {
      dispatch(removeFromCart(data.id));
    } else {
      dispatch(decrementProduct(data.id));
    }
  };

  const onClickProduct = () => {
    setProductDetail(data);
    setOpen(true);
  };

  return (
    <div className="py-3 m-2 px-5">
      <button
        onClick={onClickProduct}
        className="flex items-center justify-center cursor-pointer"
      >
        <img src={data.image} className="h-60 w-60" />
      </button>
      <div>
        <p className="h-20 pt-5 line-clamp-2 text-start font-thin text-xl">
          {data.title}
        </p>
        <div className="flex justify-start items-center">
          <Rating
            name="product-rating"
            value={data.rating.rate}
            precision={0.5}
            readOnly
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            sx={{
              color: "#ffb400",
              fontSize: "15px",
            }}
          />
          <p className="text-lg font-thin">({data.rating.count})</p>
        </div>
        <p className="font-semibold text-xl">${data.price}</p>
      </div>
      {cartAvailable ? (
        <div className="w-full flex items-center justify-between h-12">
          <button
            className="bg-purple-400 w-1/4 h-10 text-xl rounded text-white cursor-pointer"
            onClick={() => onClickMinus(cartAvailable)}
          >
            -
          </button>
          <p className="text-lg">{cartAvailable.totalNumber}</p>
          <button
            className="bg-purple-400 w-1/4 h-10 text-xl rounded text-white cursor-pointer"
            onClick={onClickPlus}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={onClickAddToCart}
          className="w-full border-2 p-1 h-12 text-lg bg-purple-400 text-white rounded-lg px-1 cursor-pointer"
        >
          ADD TO CART
        </button>
      )}
      {open && (
        <ProductDetails
          open={open}
          productDetail={productDetail}
          onClose={() => {
            setOpen(false);
          }}
          cartItem={cartItem}
        />
      )}
    </div>
  );
};

export default Product;
