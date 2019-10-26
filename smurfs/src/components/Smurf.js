import React from "react";

function Smurf ({name, age, height}) {
   return (
      <div className="smurf-card">
         <h1>{name}</h1>
         <p>height: {height}</p>
         <p>age: {age}</p>
      </div>
   );
}
export default Smurf;