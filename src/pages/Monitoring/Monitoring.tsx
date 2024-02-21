import React, { useRef, useState } from "react";
import { Status } from "../../components/Status";
import { Pipeline } from "../../components/Pipeline";
import { useAppContext } from "../../contexts/app-context";
import { AppContextType } from "../../types";
import { pipelineSections } from "../../utils/mock-data";
import { Sidebar } from "../../components/Sidebar";
import { Statistics } from "../../components/Statistics";
import { Container } from "../../components/styles/Container.styled";
import mqtt, { IClientOptions, MqttClient } from "mqtt";
import { PlantImageWrapper } from "../../components/PlantImageWrapper";

const host = "wss://broker.emqx.io:8084/mqtt";
export const Monitoring = () => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const imageRef = useRef<HTMLDivElement>(null);

  const clientId = `mqttjs_1+ ${Math.random().toString(16).substr(2, 8)}`;
  const options: IClientOptions = {
    keepalive: 60,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    // will: {
    //   topic: "WillMsg",
    //   payload: "Connection Closed abnormally..!",
    //   qos: 0,
    //   retain: false,
    // },
  };

  const client: MqttClient = mqtt.connect(host, options);

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
    let messageReceived = message.toString().trim();
    setMessage(messageReceived);
    // updateSectionImageColor(messageReceived);
    console.log(topic, message.toString());
    client.end();
  });

  const [error] = React.useState(null);
  const { showSidebar } = useAppContext() as AppContextType;
  return (
    <div>
      <Status connected={connected} />
      <Container>
        <PlantImageWrapper message={message}>
          <div className="iactiveImg" data-ii="57302" ref={imageRef}></div>
        </PlantImageWrapper>
        <Pipeline
          pipelineSections={pipelineSections}
          data={message.split(",")}
        />
      </Container>
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
