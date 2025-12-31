import { Provider } from "react-redux";
import "./App.css";
import store from "./state/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/authentication/Auth";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/home/Cart";
import CheckOut from "./pages/home/CheckOut";
import OrdersPage from "./pages/home/OrdersPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/home-page" element={<Home />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/checkout-page" element={<CheckOut />} />
          <Route path="/your-orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
