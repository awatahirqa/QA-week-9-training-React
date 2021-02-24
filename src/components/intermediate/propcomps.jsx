'use strict'
import Hello from "../parent-child/hello"

const PropComp = () =>{
    return(
        <>
            <Hello name="Chico"/>
            <Hello name="L."/>
            <Hello name="Dante"/>
        </>
    );
}

export default PropComp