import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { reducer as cartreducer } from "./AppReducer/Cart/reducer";
import { reducer as productreducer } from "./AppReducer/Product/reducer";
import { reducer as singleproductreducer } from "./AppReducer/SingleProduct/reducer";
import { reducer as LikedProductreducer } from "./AppReducer/LikedProduct/reducer";
import { AuthReducer } from "./AuthReducer/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cartreducer,
  productreducer,
  singleproductreducer,
  AuthReducer,
  LikedProductreducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
