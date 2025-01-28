import { Checkbox } from "./styled";

interface InputCheckboxProps {
  isChecked: boolean;
  onChecked: () => void;
}

const InputCheckbox = ({ isChecked, onChecked }: InputCheckboxProps) => {
  return (
    <Checkbox type="checkbox" checked={isChecked} onClick={() => onChecked()} />
  );
};

export default InputCheckbox;
