import axios from 'axios';
import {API_URL} from './CONST.json';
import{useHistory} from 'react-router-dom';
const {useState} = require('react');




const Search = () =>{
const history = useHistory();
const[query,setQuery] = useState('');
const[films,setfilms] = useState([]);
const[err,setErr] = useState(null);

const handleChange = ({target}) => {
    setQuery(target.value);
}

const handleSearch = (e)=>{
    e.preventDefault();
axios.get('${API_URL}&s=${query}')
.then(res=>{
console.log(res.data.Search);
setfilms(res.data.Search)

}).catch(err=>{
    console.error(err)
    setErr(err);
})
}
const getDetails = (id) =>{
console.log(id)
history.push('/OMDB/details/${id}');


}
return(
<>
<SearchBar query={query} handleChange={handleChange} search ={handleSearch}/>
{err? <div classname ="alert alert-danger">{err}</div>
:
<Searchresults films={films} getDetails={getDetails}/>}

</>

)




}

export default Search;