import React from "react";
import { Login, Container } from "./components";
import { UserProvider } from "./context";
import "./styles/index.scss";

const App = () => {
  return (
    <UserProvider>
      <Container>
        <Login />
      </Container>
      {/* <RelistContainer /> */}
    </UserProvider>
  );
};

export default App;
