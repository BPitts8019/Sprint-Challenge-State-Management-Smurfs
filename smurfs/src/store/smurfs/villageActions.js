import axios from "axios";
import {
   FETCH_VILLAGE_START,
   FETCH_VILLAGE_END,
   FETCH_VILLAGE_ERROR,
   ADD_SMURF_START,
   ADD_SMURF_END,
   ADD_SMURF_ERROR
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
   };
};

export function createSmurf (newSmurf) {
   return dispatch => {
      dispatch({type: ADD_SMURF_START});
   
      //axios call
      axios
         .post("http://localhost:3333/smurfs", newSmurf)
         .then(response => {
            console.log(response);
            dispatch({type: ADD_SMURF_END});
         })
         .catch(error => {
            dispatch({type: ADD_SMURF_ERROR, payload: error.response});
         })
   };
};