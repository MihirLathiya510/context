import React, { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "goto russia",
    agent: "007",
    accept: "Not Accepted",
  });
  return (
    <Context.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider