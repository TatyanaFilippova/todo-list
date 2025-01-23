import React from 'react';
import {Wrapper, Title} from './AppStyled'
import Search from "./components/Search/Search";


function App() {
  return (
    <Wrapper >
        <Title>TODO LIST</Title>
      <Search/>
    </Wrapper>
  );
}

export default App;
