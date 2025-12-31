import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductData } from "../api/operations";
import { useDispatch, useSelector } from "react-redux";
import type {
  productObj,
  productState,
} from "../../state/reducer/ProductReducer";
import Product from "../component/Product";

const Home = () => {
  const [mount, setMount] = useState(false);
  const dispatch: any = useDispatch();
  const ProductReducerData: productState = useSelector(
    (state: any) => state.ProductReducer
  );
  const [data, setData] = useState(ProductReducerData.products);
  const [categorySelected, setCategorySelected] = useState("All Products");

  const CategoryArray = [
    {
      label: "Men's clothing",
      onClick: () => onClickCategory("men's clothing"),
    },
    {
      label: "Jewelery",
      onClick: () => onClickCategory("jewelery"),
    },
    {
      label: "Electronics",
      onClick: () => onClickCategory("electronics"),
    },
    {
      label: "Women's clothing",
      onClick: () => onClickCategory("women's clothing"),
    },
  ];

  useEffect(() => {
    if (mount) {
      getProduct();
    }
  }, [mount]);

  useEffect(() => {
    if (mount == false) {
      setMount(true);
    }
  }, [mount]);

  const getProduct = async () => {
    dispatch(getProductData());
  };

  const onClickCategory = (type: string) => {
    setCategorySelected(type.toLocaleUpperCase());
    const updatedData = ProductReducerData.products.filter(
      (item) => item.category == type
    );
    setData(updatedData);
  };

  const onClickAllProduct = () => {
    setCategorySelected("All Products");
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 py-5">
        <button
          className={`text-xl text-center py-3 cursor-pointer ${
            categorySelected == "All Products"
              ? "bg-purple-300"
              : "bg-purple-200"
          }`}
          onClick={onClickAllProduct}
        >
          All Products
        </button>

        {CategoryArray.map((item, index) => {
          return (
            <button
              key={index}
              className={`text-xl text-center py-3 cursor-pointer ${
                categorySelected.toLocaleLowerCase() ==
                item.label.toLocaleLowerCase()
                  ? "bg-purple-300"
                  : "bg-purple-200"
              }`}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {ProductReducerData && ProductReducerData.products.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
          {(categorySelected !== "All Products"
            ? data
            : ProductReducerData.products
          ).map((item: productObj, index: number) => {
            return (
              <Product
                key={index}
                data={item}
                cartItem={ProductReducerData.cartItems}
              />
            );
          })}
        </div>
      ) : (
        <div> loading... </div>
      )}
    </div>
  );
};

export default Home;
