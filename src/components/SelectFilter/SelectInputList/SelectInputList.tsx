import { TitleList, Wrapper } from "./styled";

interface SelectInputListProps {
  isActive: boolean;
  setIsActive: (isOpen: boolean) => void;

  isTitle: string;
  setIsTitle: (isTitle: string) => void;
}

const SelectInputList = ({
  isActive,
  setIsActive,
  setIsTitle,
}: SelectInputListProps) => {
  return (
    <Wrapper onClick={() => setIsActive(!isActive)}>
      <TitleList
        onClick={() => {
          setIsTitle("All");
        }}
      >
        All
      </TitleList>
      <TitleList
        onClick={() => {
          setIsTitle("Complete");
        }}
      >
        Complete
      </TitleList>
      <TitleList
        onClick={() => {
          setIsTitle("Incomplete");
        }}
      >
        Incomplete
      </TitleList>
    </Wrapper>
  );
};

export default SelectInputList;
