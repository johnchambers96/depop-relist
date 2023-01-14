import React from "react";
import { HomePage } from "./pages";
import { UserProvider } from "./context";
import "./styles/index.scss";

const App = () => {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
};

export default App;
