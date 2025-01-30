import React, { useState } from "react";
import { Wrapper, Title, Shell } from "./AppStyled";
import Search from "./components/Search/Search";
import SelectFilter from "./components/SelectFilter/SelectFilter";
import TodoItem from "./components/TodoItem/TodoItem";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import ModalAddTodo from "./components/ModalAddTodo/ModalAddTodo";

const TodoItemArray = [
  { value: "Note #1", isChecked: true },
  { value: "Note #2", isChecked: false },
];

export interface TodoItem {
  value: string;
  isChecked: boolean;
}

function App() {
  const [list, setList] = useState<TodoItem[]>(TodoItemArray);
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState<string>("");
  const addTodo = (value: TodoItem) => {
    const _list = [...list, value];
    setList(_list);
    setIsOpen(false);
  };

  const [isTitle, setIsTitle] = useState("All");

  const filteredList = list.filter((item) => {
    if (item.isChecked && isTitle === "Incomplete") return false;
    if (!item.isChecked && isTitle === "Complete") return false;

    return item.value.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <Shell>
        <Search filterText={filterText} setFilterText={setFilterText} />
        <SelectFilter isTitle={isTitle} setIsTitle={setIsTitle} />
      </Shell>
      {filteredList.map((item) => (
        <TodoItem
          key={item.value}
          value={item.value}
          onEdit={() => {}}
          onDelete={() => {
            const _list = list.filter((el) => item.value !== el.value);
            setList(_list);
          }}
          isChecked={item.isChecked}
          onChecked={() => {
            const _list = list.map((el) => {
              return {
                value: el.value,
                isChecked:
                  el.value === item.value ? !el.isChecked : el.isChecked,
              };
            });

            setList(_list);
          }}
        />
      ))}
      <ButtonAdd setIsOpen={setIsOpen} isOpen={isOpen} />
      <ModalAddTodo isOpen={isOpen} setIsOpen={setIsOpen} addTodo={addTodo} />
    </Wrapper>
  );
}

export default App;
