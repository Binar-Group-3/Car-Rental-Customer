import { combineReducers } from "redux";
import carReducer from "./carReducer";
import rentalDateReducer from "./rentalDateReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  carReducer,
  rentalDateReducer,
});

export default rootReducer;
