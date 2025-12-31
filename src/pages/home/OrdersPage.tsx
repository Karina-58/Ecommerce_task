import { useMemo } from "react";
import { useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { buyReducerState } from "../../state/reducer/BuyReducer";

const OrdersPage = () => {
  const navigate = useNavigate();
  const ordersReducer: buyReducerState = useSelector(
    (state: any) => state.BuyReducer
  );

  const cartData = useMemo(() => {
    return ordersReducer.ordered_products.map((cartItem) => {
      const productDetails = ordersReducer.ordered_products.find(
        (p) => p.id === cartItem.id
      );
      return {
        ...productDetails,
        quantity: cartItem.quantity,
      };
    });
  }, [ordersReducer]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <ToastContainer theme="light" />

        <div className="max-w-6xl mx-auto mb-6">
          <NavLink to="/home-page">
            <IconButton className="bg-white shadow-md hover:bg-gray-100">
              <ArrowBack />
            </IconButton>
          </NavLink>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Orders
            </h2>
            <p>Date : {new Date().toDateString()}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-gray-600 uppercase text-sm">
                    <th className="py-4 px-2">Product Name</th>
                    <th className="py-4 px-2">Image</th>
                    <th className="py-4 px-2 text-center">Quantity</th>
                    <th className="py-4 px-2 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.length > 0 ? (
                    cartData.map((elem) => (
                      <tr
                        key={elem.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-2 font-medium text-gray-800 max-w-50 truncate">
                          {elem.title}
                        </td>
                        <td className="py-4 px-2">
                          <img
                            className="h-20 w-20 object-contain rounded-md bg-white border"
                            src={elem.image}
                            alt={elem.title}
                          />
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center justify-center space-x-3">
                            <span className="w-8 text-center font-semibold">
                              {elem.quantity}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right font-bold text-purple-600">
                          $
                          {((elem.price || 0) * (elem.quantity || 0)).toFixed(
                            2
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-20 text-center">
                        <h3 className="text-xl text-gray-500 mb-4">
                          You haven't ordered anything
                        </h3>
                        <button
                          onClick={() => navigate("/home-page")}
                          className="text-purple-600 hover:underline flex items-center justify-center mx-auto gap-2"
                        >
                          Want to buy something?
                          <ArrowForward fontSize="small" />
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {cartData.length > 0 && (
              <div className="mt-8 flex flex-col items-end border-t pt-6">
                <div className="mb-4">
                  <span className="text-gray-600 mr-4">Total Amount:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    $
                    {cartData
                      .reduce(
                        (acc, curr) =>
                          acc + (curr.price || 0) * (curr.quantity || 0),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
