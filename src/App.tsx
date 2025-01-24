import React from "react";
import { Wrapper, Title, Shell } from "./AppStyled";
import Search from "./components/Search/Search";
import SelectFilter from "./components/SelectFilter/SelectFilter";

import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <Shell>
        <Search />
        <SelectFilter />
      </Shell>
      <TodoItem
        value="Note #1"
        onEdit={() => {}}
        onDelete={() => {}}
        isChecked={true}
      />
      <TodoItem
        value="Note #2"
        onEdit={() => {}}
        onDelete={() => {}}
        isChecked={false}
      />
    </Wrapper>
  );
}

export default App;
