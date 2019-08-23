import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("Reducer 2");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      console.log("Reducer 4");
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
