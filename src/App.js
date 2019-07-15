import React from "react";
import UserReplies from "./components/UserReplies";
import Chat from "./components/Chat";
import { useAppFunctionality } from "./helper-functions/custom-hooks";
import { initialState } from "./dummy-data-structures/initialState";

function App() {
  const [state, setState, setQuestion] = useAppFunctionality(initialState);

  return (
    <div className="app_container">
      <h1>{state.title}</h1>
      <Chat state={state} />
      <UserReplies
        state={state}
        setState={setState}
        setQuestion={setQuestion}
      />
    </div>
  );
}

export default App;
