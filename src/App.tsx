import React from 'react';
import {Wrapper, Title, Shell} from './AppStyled'
import Search from "./components/Search/Search";
import SelectFilter from "./components/SelectFilter/SelectFilter";
import SelectInputList from "./components/SelectFilter/SelectInputList/SelectInputList";


function App() {
  return (
    <Wrapper >
        <Title>TODO LIST</Title>
        <Shell>
            <Search/>
            <SelectFilter/>
        </Shell>

    </Wrapper>
  );
}

export default App;
