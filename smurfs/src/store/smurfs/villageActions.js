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
      axios
         .get("http://localhost:3333/smurfs")
         .then(response => {
            dispatch({type: FETCH_VILLAGE_END, payload: response.data});
         })
         .catch(error => {
            dispatch({type: FETCH_VILLAGE_ERROR, payload: error.response});
         })
      // setTimeout(() => {
      //    dispatch({type: FETCH_VILLAGE_END, payload: [
      //       {name: "Barney"},
      //       {name: "Bill"},
      //       {name: "Ted"},
      //    ]});
      // }, 1500);
      // dispatch(FETCH_VILLAGE_ERROR);
   };
};