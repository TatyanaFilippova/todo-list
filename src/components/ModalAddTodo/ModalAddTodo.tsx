import { GlobalStyle, InputSearch, Title, Wrapper } from "./styled";
import Modal from "react-modal";

const ModalM = Modal as any;

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
Modal.setAppElement("#yourAppElement");

const ModalAddTodo = ({ isOpen, setIsOpen }: ModalProps) => {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <ModalM
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {" "}
      <GlobalStyle />
      <Wrapper>
        <Title>New Note</Title>
        <InputSearch placeholder="Input your note..." />
      </Wrapper>
    </ModalM>
  );
};

export default ModalAddTodo;
