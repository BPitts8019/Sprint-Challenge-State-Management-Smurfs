import axios from "axios";
import {
   FETCH_VILLAGE_START,
   FETCH_VILLAGE_END,
   FETCH_VILLAGE_ERROR
} from "./actionTypes";

export function fetchVillage () {
   return dispatch => {
      dispatch({type: FETCH_VILLAGE_START});
   
      //axios call
      setTimeout(() => {
         dispatch({type: FETCH_VILLAGE_END, payload: [
            {name: "Barney"},
            {name: "Bill"},
            {name: "Ted"},
         ]});
      }, 1500);
      // dispatch(FETCH_VILLAGE_ERROR);
   };
};