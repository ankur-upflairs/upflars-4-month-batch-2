import React, { createContext } from "react";
import ComA from "./ComA";
//create context
//provide context
//use context

export const userContext = createContext();

function ContextHook() {
  let user = { name: "pawan" };
  return (
    <div>
      <userContext.Provider value={user}>
        <ComA />
      </userContext.Provider>
    </div>
  );
}

export default ContextHook;
