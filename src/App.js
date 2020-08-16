import React from "react";
import "./App.css";
import Func from "./components/function";
import Class from "./components/class";
import State from "./components/setstate";
import Count from "./components/count";
import FunctionClick from "./components/functionclick";
import ClasClick from "./components/classclick";
import EventBind from "./components/eventbind";
import ParentComponent from "./components/parentcomponent";



function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClasClick /> */}
      {/* <Count /> */}
      {/* <State /> */}
      {/* <Func name="props">
        <p>child component</p>
      </Func> */}
      {/* <Class name="props"/>  */}
    </div>
  );
}

export default App;
