import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import {reducer as recentReducer} from "./AppReducer/recentView/reducer"; 
import {reducer as orderReducer} from "./AppReducer/Order/reducer"; 
import { reducer as cartreducer } from "./AppReducer/Cart/reducer";
import { reducer as productreducer } from "./AppReducer/Product/reducer";
import { reducer as singleproductreducer } from "./AppReducer/SingleProduct/reducer";
import { reducer as LikedProductreducer } from "./AppReducer/LikedProduct/reducer";
import { adminreducer as adminreducer } from "./AuthReducer/Admin/reducers";
import { reducer as AuthReducer } from "./AuthReducer/users/reducers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  recentReducer,
  orderReducer,
  cartreducer,
  productreducer,
  singleproductreducer,
  LikedProductreducer,
  adminreducer,
  AuthReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
