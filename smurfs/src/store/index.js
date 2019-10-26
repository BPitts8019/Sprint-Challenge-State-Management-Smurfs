import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk"; //allows our action creators to be HOFs

//reducers
import smurfs from "./smurfs/smurfsReducer";

//add multiple reducers here
const rootReducer = combineReducers({
   smurfs
});

//an array of all the middleware in the application
//insert and remove by modifying the array
const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, enhancers);