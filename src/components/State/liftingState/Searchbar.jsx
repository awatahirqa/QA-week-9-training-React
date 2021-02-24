'use strict'

const Searchbar = (props) =>{
const{stateQuery,updateQuery,stateCheck,updateCheck} = props;

return (
<>
<label>ToDo:</label>
<input type = "text" placeholder="ToDo:" onChange ={updateQuery} value = {stateQuery}/>
<label> only show completed tasks:</label>
<input type = "Checkbox" onChange={updateCheck} value = {stateCheck}/>





</>



)

}

export default Searchbar 