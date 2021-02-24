import List from './List'
import ToDo from './ToDo.json'
import Searchbar from './Searchbar'
import {useState} from 'react'

const SearchableList = () => {


    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }
    const handleCheck = c => {
        setCheck(c => !c);
    }


    return (
        <>
            <Searchbar
                stateQuery={query}
                updateQuery={handleQuery}
                stateCheck={check}
                updateCheck={handleCheck}



            />
            <List list={ToDo} check={check} query={query} />




        </>


    )



}

export default SearchableList