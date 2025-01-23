import {InputSearch,IconSearch,Wrapper} from "./styled";
import icon from './assets/icon.svg'


const Search = () =>{
    return(
        <Wrapper>
            <InputSearch placeholder="Search not..."/>
            <IconSearch src={icon}/>
        </Wrapper>
    )
}

export default Search
