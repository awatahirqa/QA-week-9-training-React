'use strict'

const Second = ()=> {
    //How to use JSX 

    const name = 'Waleed Tahir';
    const date = new Date();
    const firstName = 'Waleed';
    const lastName = 'Tahir';
return(
<>
<p>Hello friends nice to see you</p>
<p>{name}</p>
<p>This component was created on : {date.toLocaleDateString()}</p>
<p>{firstName} {lastName}</p>
<p>{`${firstName} ${lastName}`}</p>
<p>The current time is : {date.toLocaleTimeString()}</p>
</>
);

}

export default Second