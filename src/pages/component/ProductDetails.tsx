import { Dialog, DialogContent, DialogTitle, Rating } from "@mui/material";
import type { CartItem, productObj } from "../../state/reducer/ProductReducer";
import { Cancel } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../../state/action/Action";

export type Props = {
  open: boolean;
  onClose: () => void;
  productDetail: productObj;
  cartItem: CartItem[];
};

const ProductDetails = ({ open, onClose, productDetail, cartItem }: Props) => {
  const dispatch: any = useDispatch();
  const cartAvailable: CartItem | null =
    cartItem.find((item) => item.id === productDetail.id) ?? null;

  const onClickAddToCart = () => {
    dispatch(addToCart(productDetail.id));
  };

  const onClickPlus = () => {
    dispatch(incrementProduct(productDetail.id));
  };

  const onClickMinus = (cartAvailable: CartItem) => {
    if (cartAvailable.totalNumber == 1) {
      dispatch(removeFromCart(productDetail.id));
    } else {
      dispatch(decrementProduct(productDetail.id));
    }
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-thin">Product Details</p>
          <button onClick={onClose}>
            <Cancel sx={{ color: "#683f8d", fontSize: 30 }} />
          </button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="flex justify-center m-3">
          <img src={productDetail.image} className="h-100 w-1/2" />
          <div className="w-1/2 pl-5">
            <p className="text-2xl text-center font-thin ">
              {productDetail.category}
            </p>
            <div className=" pb-10">
              <p className="font-semibold text-xl">{productDetail.title}</p>
              <p>{productDetail.description}</p>
              <div className="flex justify-start items-center">
                <Rating
                  name="product-rating"
                  value={productDetail.rating.rate}
                  precision={0.5}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                  sx={{
                    color: "#ffb400",
                    fontSize: "20px",
                  }}
                />
                <p className="text-lg font-thin">
                  ({productDetail.rating.count})
                </p>
              </div>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
