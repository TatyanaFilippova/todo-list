import { Checkbox } from "./styled";

interface InputCheckboxProps {
  isChecked: boolean;
}

const InputCheckbox = ({ isChecked }: InputCheckboxProps) => {
  return <Checkbox type="checkbox" checked={isChecked} />;
};

export default InputCheckbox;
