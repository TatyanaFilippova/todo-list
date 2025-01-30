import { InputSearch, IconSearch, Wrapper } from "./styled";
import icon from "./assets/icon.svg";

interface SearchProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

const Search = ({ filterText, setFilterText }: SearchProps) => {
  return (
    <Wrapper>
      <InputSearch
        placeholder="Search not..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <IconSearch src={icon} />
    </Wrapper>
  );
};

export default Search;
