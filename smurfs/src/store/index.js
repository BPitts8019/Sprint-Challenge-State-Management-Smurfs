import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "react-thunk";

//reducers
//import the reducers

//add multiple reducers here
const rootReducer = combineReducers({
   //some reducers
});

//an array of all the middleware in the application
//insert and remove by modifying the array
const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, enhancers);