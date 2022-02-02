import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};
const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentBond />;
};
const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Mission Info.</h3>
          <p>Mission Name : {context.data.mname}</p>
          <h2>Mission status: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to Accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1> Context Api</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;