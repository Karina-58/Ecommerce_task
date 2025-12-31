import { useState, useEffect } from "react";

interface LoginData {
  userid: string;
  name: string;
  email: string;
  password: string;
  number: string;
}

function Login() {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [valid, setValid] = useState<boolean>(false);
  const [allvalid, setAllValid] = useState<boolean>(false);

  // const navigate = useNavigate();

  // const [getlog, setGetlog] = useState<SignupUser[]>([]);
  // const [cart, setCart] = useState<any[]>([]);

  // const state = useSelector((state: any) => state.Reducer);

  const getlogin = async (): Promise<void> => {
    // setGetlog(result.data);
    // setCart(state);
  };

  useEffect(() => {
    getlogin();
  }, []);

  const [data, getData] = useState<LoginData>({
    userid: "",
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const changeHandle = (e: any): void => {
    setAllValid(false);
    const { name, value } = e.target;
    getData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const loginUser = (): void => {
    setValid(true);
    // if (data.email === elem.email && data.password === elem.password) {
    //   if (cart.length > 0) {
    //     navigate("/userdetail");
    //   } else {
    //     navigate("/", { state: { data: localStorage.getItem(elem.id) } });
    //   }
    //   data.userid = elem.id;
    //   data.number = elem.number;
    //   data.name = elem.fullname;
    //   localStorage.setItem("logindata", JSON.stringify(data));
    // } else {
    //   setAllValid(true);
    // }
    return console.log("done");
  };

  return (
    <div className="min-h-screen w-screen justify-center items-center flex bg-gray-100">
      {/* <div className="p-4">
        <NavLink to="/">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </NavLink>
      </div> */}

      <div className="flex justify-center w-100">
        <div className="w-full max-w-sm shadow-2xl rounded-lg my-10  bg-white">
          <div className="rounded-t-lg px-4">
            <h3 className="py-4 text-purple-500 text-2xl text-center font-semibold">
              Login
            </h3>
          </div>

          <div className="p-6">
            {/* <label className="block font-medium mb-1">Email:</label> */}

            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={changeHandle}
              className="w-full border-b-purple-600 border-b-2 rounded px-1 py-1 mt-1 :border-0"
            />
            {valid && !data.email && (
              <span className="text-red-500 text-sm">*enter valid input</span>
            )}
            {valid && !data.email.match(pattern) && (
              <span className="text-red-500 text-sm">
                *Invalid emailAddress
              </span>
            )}
          </div>

          <div className="px-6 pb-4">
            {/* <label className="block font-medium mb-1">Password:</label> */}
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandle}
              placeholder="Password"
              className="w-full border-b-purple-600 border-b-2 rounded px-3 py-2 mt-1"
            />
            {valid && !data.password && (
              <span className="text-red-500 text-sm">
                *Password is important
              </span>
            )}
          </div>

          <div className="px-6 pb-6">
            <button
              className="w-full cursor-pointer bg-linear-to-r from-indigo-500 to-purple-600 text-white py-2 rounded"
              onClick={loginUser}
            >
              Login
            </button>

            {allvalid && data.email && data.password && (
              <span className="text-red-500 text-sm block mt-2">
                *check your email/password
              </span>
            )}
          </div>

          {/* <p className="px-6 pb-6 text-sm">
            new here? click here to{" "}
            <Link to="/signup" className="text-indigo-600 font-medium">
              signup
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
