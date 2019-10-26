import React from "react";
import {connect} from "react-redux";
import "./App.css";

//context

//components
import Village from "./Village";

function App ({error}) {
   return (
      <div className="App">
         <h1>SMURFS! 2.0 W/ Redux</h1>
         <div>Welcome to your state management version of Smurfs!</div>
         <div>Start inside of your `src/index.js` file!</div>
         <div>Have fun!</div>

         {error && <div>{error}</div>}

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
