import React from "react";
import { RelistContainer } from "./components";
import { UserProvider } from "./context";
import "./styles/index.scss";

const App = () => {
  return (
    <UserProvider>
      <RelistContainer />
    </UserProvider>
  );
};

export default App;
