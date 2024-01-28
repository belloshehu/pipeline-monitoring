import React, { useEffect, useState } from "react";
import { Status } from "../../components/Status";
import { Pipeline } from "../../components/Pipeline";
import { useAppContext } from "../../contexts/app-context";
import { AppContextType } from "../../types";
import { pipelineSections } from "../../utils/mock-data";
import { Sidebar } from "../../components/Sidebar";
import { Statistics } from "../../components/Statistics";
import { Container } from "../../components/styles/Container.styled";
import mqtt, { MqttClient } from "mqtt";

const host2 = "wss://broker.emqx.io:8084/mqtt";
export const Monitoring = () => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");

  const client: MqttClient = mqtt.connect(host2);

  client.on("connect", () => {
    setConnected(true);
    client.subscribe("/pipeline/monitoring", (err) => {
      if (!err) {
        client.publish("presence", "Hello mqtt");
      }
    });
  });

  client.on("message", (topic, message) => {
    // message is Buffer
    setMessage(message.toString().trim());
    console.log(topic, message.toString());
    client.end();
  });

  const [error] = React.useState(null);
  const { showSidebar } = useAppContext() as AppContextType;
  return (
    <div>
      <Status connected={connected} />
      <Pipeline pipelineSections={pipelineSections} data={message.split(",")} />
      {showSidebar && <Sidebar title="Simulation" />}
      {error ? (
        <Statistics />
      ) : (
        <Container>
          <h3 style={{ color: "white" }}>
            {message.split(",").includes("1")
              ? "There is leakage"
              : "Everything is ok"}
          </h3>
        </Container>
      )}
    </div>
  );
};
