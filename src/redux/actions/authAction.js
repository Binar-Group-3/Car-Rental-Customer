import TYPES from "../types";
import axios from "axios";
import swal from "sweetalert";

export const handleLogin = (payload, navigate) => {
  return (dispatch) => {
    axios
      .post("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", payload)
      .then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        dispatch({
          type: TYPES.POST_LOGIN,
          payload: res.data.access_token,
        });
        swal({
          title: "Welcome!",
          text: "Login successfully",
          icon: "success",
          timer: 1500,
        });
        navigate("/carimobil");
      })
      .catch((err) => console.log(err.message));
  };
};
