import React from "react";
import { StyledButton } from "./button.styled";

interface AddEventButtonProps {
  handleButtonClick: () => void;
}
const AddEventButton = ({ handleButtonClick }: AddEventButtonProps) => {
  return (
    <StyledButton type={"primary"} onClick={handleButtonClick}>
      View Test Event
    </StyledButton>
  );
};

export default AddEventButton;
