import { ActionTypes } from "../contants/actionTypes";
const initialState = {
  products: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        products: payload,
      };

    default:
      return state;
  }
};
