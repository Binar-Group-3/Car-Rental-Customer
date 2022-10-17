import { combineReducers } from "redux"
import carReducer from "./carReducer"
import rentalDateReducer from "./rentalDateReducer"

const rootReducer = combineReducers({
  carReducer,
  rentalDateReducer,
})

export default rootReducer
