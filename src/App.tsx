import { useState } from "react";
import { Header } from "./components/Header";
import { Pipeline } from "./components/Pipeline";
import { Statistics } from "./components/Statistics";
import { Status } from "./components/Status";
import GlobalStyles from "./components/styles/Global";
import { pipelineSections } from "./utils/mock-data";
import { Container } from "./components/styles/Container.styled";
import { useAppContext } from "./contexts/app-context";
import { Sidebar } from "./components/Sidebar";
import { AppContextType } from "./types";

function App() {
  const [error] = useState(null);
  const { showSidebar } = useAppContext() as AppContextType;
  return (
    <>
      <GlobalStyles />
      <Header />
      <Status />
      <Pipeline pipelineSections={pipelineSections} />
      {showSidebar && <Sidebar title="Simulation" />}
      {}
      {error ? (
        <Statistics />
      ) : (
        <Container>
          <h3 style={{ color: "white" }}>Everything is ok</h3>
        </Container>
      )}
    </>
  );
}

export default App;
