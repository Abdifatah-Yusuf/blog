import { useEffect,useState } from "react";

function Effect(){
    const[age,newage]= useState(20)
    const changeAge = ()=>{
        newage(age + 1)
    }

    useEffect(function() {
        console.log("age change")
    })

    return(
        <button onClick={changeAge}>CLICK</button>
    )
}
export default Effect;