import { useEffect } from "react";
import styled from "styled-components";

const StyledPlantImageWrapper = styled.div`
  border: 2px green solid;
  width: 100%;
  height: fit-content;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 400px;
    height: fit-content;
  }
`;

export const PlantImageWrapper = ({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) => {
  const updateSectionImageColor = (messageReceived: string) => {
    const ele = document?.getElementsByClassName("iactiveImgPoint");
    const pipelineSectionData: string[] = messageReceived.split(",");

    for (let i = 0; i < ele.length; i++) {
      const slide = ele[i];

      if (pipelineSectionData[i] === "0") {
        if (slide instanceof HTMLElement) {
          slide.style.backgroundColor = "green";
          slide.style.borderColor = "green";
          const f = slide.firstElementChild as HTMLElement;
          f.style.cssText = "background:green !important";
        }
      } else {
        if (slide instanceof HTMLElement) {
          slide.style.backgroundColor = "red";
          slide.setAttribute("class", "iactiveImgPoint pulsetrigger");
          const f = slide.firstElementChild as HTMLElement;
          f.style.cssText = "background:red !important";
        }
      }
    }
  };

  useEffect(() => {
    updateSectionImageColor(message);
  }, [message]);
  return <StyledPlantImageWrapper>{children}</StyledPlantImageWrapper>;
};
