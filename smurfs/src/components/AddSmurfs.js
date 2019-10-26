import React, {useState} from "react";
import {connect} from "react-redux";

//context
import {createSmurf} from "../store/smurfs/villageActions";

function AddSmurfs ({createSmurf}) {
   const [info, setInfo] = useState({
      name: "",
      height: 0.1,
      age: 0
   });


   const handleChange = event => {
      const newData = {
         ...info,
      };

      newData[event.target.dataset.type] = event.target.value;
      setInfo(newData);
   };

   const handleClick = event => {
      event.preventDefault();
      console.log(`Create a Smurf!! ${JSON.stringify(info, null, 3)}`);
      createSmurf(info);
   };

   return (
      <form name="addSmurfs">
         <label>
            Name:
            <input data-type="name" type="text" onChange={handleChange} value={info.name} />
         </label>
         <label>
            Height:
            <input data-type="height" type="number" min="0.1" onChange={handleChange} value={info.height} />
         </label>
         <label>
            Age: 
            <input data-type="age" type="number" min="0" onChange={handleChange} value={info.age} />
         </label>
         <button type="submit" onClick={handleClick}>Add Smurf</button>
      </form>
   );
}

const mapDispatchToProps = {
   createSmurf
}

export default connect(null, mapDispatchToProps)(AddSmurfs);