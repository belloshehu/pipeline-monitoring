import { ExecutionContext } from "styled-components";

export type ContainerProps = {
  direction: "row" | "column";
};

export type PipelineSectionType = {
  text: string;
  id: string;
  length: number;
  measurementUnit: string;
};

export interface StyledContext extends ExecutionContext {
  bgColor: string;
  color: string;
  direction: "row" | "column";
}

export type AppContextType = {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
};

export type FeatureType = {
  heading: string;
  description: string;
  imageUrl: string;
  direction: string;
};
