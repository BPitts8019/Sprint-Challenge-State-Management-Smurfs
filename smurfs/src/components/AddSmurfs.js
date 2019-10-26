import React from "react";
import {connect} from "react-redux";

//context

function AddSmurfs ({name, age, height}) {
   return (
      <form name="addSmurfs">
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
   );
}


export default AddSmurfs;