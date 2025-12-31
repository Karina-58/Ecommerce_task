import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { ToastContainer } from "react-toastify";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { buyReducerState } from "../../state/reducer/BuyReducer";
import { emptyCart, placeorder } from "../../state/action/Action";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BuyReducer: buyReducerState = useSelector(
    (state: any) => state.BuyReducer
  );

  const totalItems = useMemo(() => {
    return BuyReducer.buy_product.reduce((total, item) => {
      return total + (item?.quantity ?? 0);
    }, 0);
  }, [BuyReducer.buy_product]);

  const totalPayment = BuyReducer.buy_product
    .reduce((acc, curr) => acc + (curr.price || 0) * (curr.quantity || 0), 0)
    .toFixed(2);

  const onOrderNow = () => {
    dispatch(emptyCart());
    dispatch(placeorder());
    navigate("/your-orders");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <ToastContainer theme="light" />

        <div className="max-w-6xl mx-auto mb-6">
          <NavLink to="/cart-page">
            <IconButton className="bg-white shadow-md hover:bg-gray-100">
              <ArrowBack />
            </IconButton>
          </NavLink>
        </div>

        <div className="flex justify-center border border-purple-400 rounded-2xl">
          <div className="w-1/2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Shipping Details
            </h2>
            <div className="h-px bg-purple-400" />
            <table className="table d-inline">
              <thead></thead>
              <tbody>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Name
                  </th>
                  <td className="font-thin ">User Name</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Number
                  </th>
                  <td className="font-thin ">+91 98543 65213</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Email
                  </th>
                  <td className="font-thin ">user@gmail.com</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Address
                  </th>
                  <td className="font-thin ">
                    12/123 , nehrunagar , ahemdabad , gujarat , india
                  </td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    PinCode
                  </th>
                  <td className="font-thin ">380015</td>
                </tr>
              </tbody>
            </table>
            <h6 className="my-3 font-semibold text-sm text-red-700">
              * Payment type : Cash on delivery
            </h6>
          </div>
          <div className="w-1/2 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              IN YOUR BAG
            </h2>
            <div className="h-px bg-purple-400" />
            <table className="table d-inline">
              <thead></thead>
              <tbody>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Total Items
                  </th>
                  <td className="font-thin">{totalItems}</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Sub Total
                  </th>
                  <td className="font-thin">$ {totalPayment}</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Estimated Shipping
                  </th>
                  <td className="font-thin">$ 0.00</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Estimated Tax
                  </th>
                  <td className="font-thin">$ 0.00</td>
                </tr>
                <tr>
                  <th className="text-start font-semibold text-lg p-3 text-purple-700">
                    Total
                  </th>
                  <td className="font-thin">$ {totalPayment}</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={onOrderNow}
              className="bg-purple-400 p-3 rounded-lg text-white"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
