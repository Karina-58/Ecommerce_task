import React, { useState } from "react";
import { ArrowDropDownSharp } from "@mui/icons-material";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import type { productState } from "../../state/reducer/ProductReducer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const productState: productState = useSelector(
    (state: any) => state.ProductReducer
  );
  // Total Cart Items
  const totalQuantity = productState.cartItems.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.totalNumber;
    },
    0
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickCartIcon = () => {
    navigate("/cart-page");
  };

  return (
    <>
      <nav className="bg-white text-purple-600 flex items-center w-full sticky z-10 px-4 shadow-md h-18.25 top-0">
        {/* <button className="lg:hidden" onClick={onMenuButtonClick}>
          <Bars3Icon className="h-8 w-10" />
        </button> */}

        <div className="flex justify-between w-full items-center">
          <div className="font-bold text-xl">
            <button
              className="cursor-pointer"
              onClick={() => {
                navigate("/home-page");
              }}
            >
              Products
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={onClickCartIcon}
              className="relative mx-5 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            </button>
            <button className="flex items-center" onClick={handleMenuClick}>
              {/* <img src={UserIcon} className="h-8 w-8 bg-[#008d9257] rounded-full p-1 mr-2" alt="user" /> */}
              User
              <ArrowDropDownSharp />
            </button>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
              <MenuItem
                onClick={() => {
                  navigate("/your-orders");
                }}
              >
                Your Orders
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>

      {/* Logout Dialog */}
      <Dialog
        fullWidth
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
      >
        <DialogTitle sx={{ bgcolor: "#c27bff", color: "white" }}>
          Logout
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <p className="py-5 text-lg">Are you sure you want to logout?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogoutModal(false)}>Cancel</Button>
          <button
            className="bg-purple-500 text-lg text-white px-3 rounded py-2"
            onClick={() => {
              setOpenLogoutModal(false);
            }}
          >
            Logout
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
