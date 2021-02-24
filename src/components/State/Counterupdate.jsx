'use strict'

import {useState} from 'react';

const CounterUpdate = () =>{
const [counter,setCounter] = useState(0);
console.log(counter);
const increment =() =>{
console.log('I am incrementing');
setCounter(c =>c+1);

}
return(
    <>
<p>The vallue of counter is :{counter}</p>
<button onClick={increment}>++</button>
<button onClick={() => setCounter(c => c-1)}> --</button>

    </>



)
}