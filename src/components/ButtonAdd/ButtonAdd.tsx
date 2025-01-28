import { Button, IconButton, Wrapper } from "./styled";
import iconButton from "./assets/iconButton.svg";

interface ButtonAddProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ButtonAdd = ({ setIsOpen, isOpen }: ButtonAddProps) => {
  return (
    <Wrapper
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Button>
        <IconButton src={iconButton} />
      </Button>
    </Wrapper>
  );
};
export default ButtonAdd;
