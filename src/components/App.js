import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

function App() {
  return (
    <Tooltip text="This is a tooltip" children='This is another tooltip'>
      {/* <div className="tooltip">Hover over me</div>
      <div className="tooltip">Hover over me to see another tooltip</div> */}
      
    </Tooltip>
  );
}

export default App;

