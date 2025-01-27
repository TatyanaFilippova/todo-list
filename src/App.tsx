import React, { useState } from "react";
import { Wrapper, Title, Shell } from "./AppStyled";
import Search from "./components/Search/Search";
import SelectFilter from "./components/SelectFilter/SelectFilter";
import TodoItem from "./components/TodoItem/TodoItem";

const TodoItemArray = [
  { value: "Note #1", isChecked: true },
  { value: "Note #2", isChecked: false },
];

interface TodoItem {
  value: string;
  isChecked: boolean;
}

function App() {
  const [list, setList] = useState<TodoItem[]>(TodoItemArray);

  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <Shell>
        <Search />
        <SelectFilter />
      </Shell>
      {list.map((item) => (
        <TodoItem
          key={item.value}
          value={item.value}
          onEdit={() => {}}
          onDelete={() => {
            const _list = list.filter((el) => item.value !== el.value);
            setList(_list);
          }}
          isChecked={item.isChecked}
        />
      ))}
    </Wrapper>
  );
}

export default App;
