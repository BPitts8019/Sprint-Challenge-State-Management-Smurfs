import React from "react";
import {connect} from "react-redux";
import "./App.css";

//context

//components

function App ({village, isLoading, error}) {
   return (
      <div className="App">
         <h1>SMURFS! 2.0 W/ Redux</h1>
         <div>Welcome to your state management version of Smurfs!</div>
         <div>Start inside of your `src/index.js` file!</div>
         <div>Have fun!</div>

         {error && <div>{error}</div>}

         {
            (!isLoading && village && village.length > 0)
            ?  <p>Display the village, population: ${village.length}</p>
            :  <p>Loading...</p>
         }
      </div>
   );
}

const mapStateToProps = state => {
   return {
      village: state.smurfs.village,
      isLoading: state.smurfs.isLoading,
      error: state.smurfs.error
   };
};

export default connect(mapStateToProps)(App);
