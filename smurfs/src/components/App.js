import React from "react";
import {connect} from "react-redux";
import "./App.css";

//components
import Village from "./Village";
import AddSmurfs from "./AddSmurfs";

function App ({error}) {
   return (
      <div className="App">
         {error && <div className="error">{error}</div>}

         <AddSmurfs />
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
