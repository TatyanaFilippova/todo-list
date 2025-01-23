import { ButtonSelect, IconSelect, Wrapper } from "./styled";
import iconSelect from "./assets/chevron-top.svg";
import SelectInputList from "./SelectInputList/SelectInputList";
import React, { useState } from "react";
import { TitleList } from "./SelectInputList/styled";

const SelectFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTitle, setIsTitle] = useState("All");
  return (
    <Wrapper>
      <ButtonSelect onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <TitleList isTitle={isTitle}>{isTitle}</TitleList>}
        <IconSelect src={iconSelect} />
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
