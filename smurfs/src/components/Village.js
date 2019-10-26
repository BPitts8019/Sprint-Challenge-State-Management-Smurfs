import React from "react";
import {connect} from "react-redux";

function Village ({village, isLoading, error}) {
   return (
      (!isLoading && village && village.length > 0)
      ?  <p>Display the village, population: ${village.length}</p>
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

export default connect(mapStateToProps)(Village);