import {
   FETCH_VILLAGE_START,
   FETCH_VILLAGE_END,
   FETCH_VILLAGE_ERROR
} from "./actionTypes";

const initialState = {
   village: null,
   isLoading: false,
   error: null
}

export default (state = initialState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};