import React, {useEffect} from "react";
import {connect} from "react-redux";

//context
import {fetchVillage} from "../store/smurfs/villageActions";

//components
import Smurf from "./Smurf";

function Village ({village, isLoading, error, fetchVillage}) {
   useEffect(() => {
      fetchVillage();
   }, []);

   return (
      (!isLoading && village && village.length > 0)
      ?  (
         <div>
            <p>population: {village.length}</p>
            {village.map(smurf => <Smurf key={smurf.id} {...smurf} />)}
         </div>
      )
      :  <p>Loading...</p>
   );
}

const mapStateToProps = state => {
   return {
      village: state.smurfs.village,
      isLoading: state.smurfs.isLoading,
      error: state.smurfs.error
   };
};

const mapDispatchToProps = {
   fetchVillage
}
export default connect(mapStateToProps, mapDispatchToProps)(Village);