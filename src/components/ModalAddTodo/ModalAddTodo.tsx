import {
  ButtonApply,
  ButtonCancel,
  GlobalStyle,
  InputSearch,
  Title,
  Wrapper,
  Shell,
} from "./styled";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { TodoItem } from "../../App";

const ModalM = Modal as any;

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addTodo: (value: TodoItem) => void;
}
Modal.setAppElement("#yourAppElement");

interface FormValues {
  fieldName: string;
}
const ModalAddTodo = ({ isOpen, setIsOpen, addTodo }: ModalProps) => {
  function closeModal() {
    setIsOpen(false);
  }

  const ownSubmit = (data: FormValues) => {
    addTodo({
      value: data.fieldName,
      isChecked: false,
    });
  };

  const form = useForm<FormValues>();
  const field = form.register("fieldName");
  const submit = form.handleSubmit(ownSubmit);
  return (
    <ModalM
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <GlobalStyle />
      <Wrapper>
        <Title>New Note</Title>
        <InputSearch placeholder="Input your note..." {...field} />
        <Shell>
          <ButtonCancel onClick={() => closeModal()}>Cancel</ButtonCancel>
          <ButtonApply onClick={() => submit()}>Apply</ButtonApply>
        </Shell>
      </Wrapper>
    </ModalM>
  );
};

export default ModalAddTodo;
