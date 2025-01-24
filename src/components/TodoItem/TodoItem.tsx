import InputCheckbox from "./InputCheckbox/InputCheckbox";
import { IconDelete, IconEdit, Title, Wrapper } from "./styled";
import iconEdit from "./assets/edit.svg";
import iconDelete from "./assets/delete.svg";

interface TodoItemProps {
  value: string;
  onEdit: () => void;
  onDelete: () => void;
  isChecked: boolean;
}

const TodoItem = ({ value, onEdit, onDelete, isChecked }: TodoItemProps) => {
  return (
    <Wrapper>
      <InputCheckbox isChecked={isChecked} />
      <Title>{value}</Title>
      <IconEdit src={iconEdit} onClick={() => onEdit()} />
      <IconDelete src={iconDelete} onClick={() => onDelete()} />
    </Wrapper>
  );
};

export default TodoItem;
