import React from "react";
import CounterContainer from "./container/CouterContainer"
import TodoContainer from "./container/TodosContainer"

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