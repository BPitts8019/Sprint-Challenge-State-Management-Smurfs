import React, {useEffect} from "react";
import {connect} from "react-redux";

//context
import {fetchVillage} from "../store/smurfs/villageActions";

function Village ({village, isLoading, error, fetchVillage}) {
   useEffect(() => {
      fetchVillage();
   }, []);

   return (
      (!isLoading && village && village.length > 0)
      ?  <p>Display the village, population: {village.length}</p>
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