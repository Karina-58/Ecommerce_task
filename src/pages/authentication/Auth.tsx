import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const authenticateUser = async () => {
    const getUserInfo = await localStorage.getItem("USER_INFO");
    const getAuthToken = await localStorage.getItem("AUTH_TOKEN");
    const data = JSON.stringify(getUserInfo);
    if (data && getAuthToken) {
      navigate("/user-login");
    } else {
      navigate("/home-page"); //alternative condition
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div>
      <div></div>auth
    </div>
  );
};

export default Auth;
