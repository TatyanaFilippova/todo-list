import { ButtonSelect, ButtonTitle, IconSelect, Wrapper } from "./styled";
import iconSelect from "./assets/chevron-top.svg";
import SelectInputList from "./SelectInputList/SelectInputList";
import React, { useState } from "react";

interface SelectFilterProps {
  isTitle: string;
  setIsTitle: (isTitle: string) => void;
}

const SelectFilter = ({ isTitle, setIsTitle }: SelectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
