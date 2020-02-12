import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import products from "../reducers/products";
import recommended_products from '../reducers/recommendedProducts';
import auth from "../reducers/auth";
import users from "../reducers/users";
import categories from "../reducers/categories";
import order from "../reducers/order";
import profile from "../reducers/profile";
import cartProducts from "../reducers/cart";

export default function configureStore(history, initialState) {
  const reducers = {
    products,
    auth,
    users,
    categories,
    order,
    profile,
    cartProducts,
    recommended_products
    };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];
  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
