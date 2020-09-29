import { FEED_DATA } from "../constants";

export const TableDataReducer = (state, action) => {
  switch (action.type) {
    case FEED_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
