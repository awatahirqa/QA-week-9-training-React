'use strict'
import {useState} from 'react';
const DifferentStates = () =>{
const[edit,seteEdit] = useState(false);
return(
<>
<p>The value of edit is {edit};</p>
{edit ? <p>True</p>:<p>False</p>}
<button onClick ={() => seteEdit(c=>!c)}></button>
</>

)



}