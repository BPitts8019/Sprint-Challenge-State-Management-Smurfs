import {
   FETCH_VILLAGE_START,
   FETCH_VILLAGE_END,
   FETCH_VILLAGE_ERROR,
   ADD_SMURF_START,
   ADD_SMURF_END,
   ADD_SMURF_ERROR
} from "./actionTypes";

const NO_ERRORS = null;
const ZERO_POP = null;
const initialState = {
   village: ZERO_POP,
   isLoading: false,
   addingSmurf: false,
   error: NO_ERRORS,
}

export default (state = initialState, action) => {
   switch (action.type) {
      case FETCH_VILLAGE_START:
         return {
            ...state,
            isLoading: true,
            error: NO_ERRORS
         };
      case FETCH_VILLAGE_END:
         return {
            ...state,
            village: action.payload,
            isLoading: false,
            error: NO_ERRORS
         };
      case ADD_SMURF_START:
         return {
            ...state,
            addingSmurf: true,
            error: NO_ERRORS
         };
      case ADD_SMURF_END:
         return {
            ...state,
            addingSmurf: false,
            error: NO_ERRORS
         };
      case ADD_SMURF_ERROR:
      case FETCH_VILLAGE_ERROR:
         return {
            ...state,
            village: ZERO_POP,
            isLoading: false,
            addingSmurf: false,
            error: action.payload
         };
      default:
         return state;
   }
};