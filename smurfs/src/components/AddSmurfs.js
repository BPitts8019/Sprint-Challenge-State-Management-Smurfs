import React from "react";
import {connect} from "react-redux";

//context
import {createSmurf} from "../store/smurfs/villageActions";

function AddSmurfs ({createSmurf}) {
   const handleClick = event => {
      event.preventDefault();
      createSmurf();
   };
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
         <button type="submit" onClick={handleClick}>Add Smurf</button>
      </form>
   );
}

const mapDispatchToProps = {
   createSmurf
}

export default connect(null, mapDispatchToProps)(AddSmurfs);