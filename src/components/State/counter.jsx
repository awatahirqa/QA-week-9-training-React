'use strict'
import {useState} from 'react';



const Counter = () => {
    // value, functionToUpdate
    const [count, setCount] = useState(5);

    return (
        <>
           
            <p>The current value of count is: {count}</p>
        </>
    )

}

export default Counter