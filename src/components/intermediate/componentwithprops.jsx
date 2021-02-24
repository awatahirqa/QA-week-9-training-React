'use strict';
import ArrayItem from "./ArrayItem";
import People from "../People.json";

 
const ComponentWithProps = (props) => {

    const {numberProp, booleanProp, strProp, objProp, arrayProp, funcProp} = props; 
console.log(objProp);
    // print an object
    const objectPropsDisplay = []; 

    for(let[k,v] of Object.entries(objProp)){
        objectPropsDisplay.push(<li key={k}> Value: {v}</li>);
    }


    return(
        <> 
            <p>String Prop : {strProp}</p>
            <p>Number Prop : {numberProp}</p>
            <p>func Prop : {funcProp()}</p>
            
            
            {
                arrayProp.map((item,i) => (
                    <ArrayItem key={i} item={item}/>
                ))
            }
           
            <p>{objectPropsDisplay}</p>
        </>
    );
}

export default ComponentWithProps; 