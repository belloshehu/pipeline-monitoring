import React from "react";
import { Status } from "../../components/Status";
import { Pipeline } from "../../components/Pipeline";
import { useAppContext } from "../../contexts/app-context";
import { AppContextType } from "../../types";
import { pipelineSections } from "../../utils/mock-data";
import { Sidebar } from "../../components/Sidebar";
import { Statistics } from "../../components/Statistics";
import { Container } from "../../components/styles/Container.styled";

export const Monitoring = () => {
  const [error] = React.useState(null);
  const { showSidebar } = useAppContext() as AppContextType;
  return (
    <div>
      <Status />
      <Pipeline pipelineSections={pipelineSections} />
      {showSidebar && <Sidebar title="Simulation" />}
      {error ? (
        <Statistics />
      ) : (
        <Container>
          <h3 style={{ color: "white" }}>Everything is ok</h3>
        </Container>
      )}
    </div>
  );
};
