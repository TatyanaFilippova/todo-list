import { ButtonSelect, ButtonTitle, IconSelect, Wrapper } from "./styled";
import iconSelect from "./assets/chevron-top.svg";
import SelectInputList from "./SelectInputList/SelectInputList";
import React, { useState } from "react";

const SelectFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTitle, setIsTitle] = useState("All");
  return (
    <Wrapper>
      <ButtonSelect onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <ButtonTitle>{isTitle}</ButtonTitle>}
        <IconSelect src={iconSelect} isOpen={isOpen} />
      </ButtonSelect>
      {isOpen && (
        <SelectInputList
          isActive={isOpen}
          setIsActive={setIsOpen}
          isTitle={isTitle}
          setIsTitle={setIsTitle}
        />
      )}
    </Wrapper>
  );
};

export default SelectFilter;
