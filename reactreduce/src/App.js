import React from "react";
import CounterContainer from "./container/CounterUseSelect"
import TodoContainer from "./container/TodoHook.Container"

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodoContainer/>
    </div>
  );
}

export default App;