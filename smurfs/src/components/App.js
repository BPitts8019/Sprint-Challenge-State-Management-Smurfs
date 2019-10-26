import React from "react";
import {connect} from "react-redux";
import "./App.css";

//context

//components
import Village from "./Village";

function App ({error}) {
   return (
      <div className="App">
         {error && <div className="error">{error}</div>}

         <form name="addSmurf">
            <label>
               Name:
               <input type="text" />
            </label>
            <label>
               Height:
               <input type="number" min="0.1" placeholder="in centimeters" />
            </label>
            <label>
               Age: 
               <input type="number" min="0" />
            </label>
            <button type="submit" onClick={event => {event.preventDefault()}}>Add Smurf</button>
         </form>

         <Village />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      error: state.smurfs.error
   };
};

export default connect(mapStateToProps)(App);
