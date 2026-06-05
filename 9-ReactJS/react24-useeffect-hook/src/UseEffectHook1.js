import React,{useState,useEffect} from "react";
function UseEffectHook1(){
    const [count,setCount] = useState(0);
     function updateCount() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }
function effectFunction() {
    setTimeout(updateCount, 1000);
  }

  // useEffect using normal function
  useEffect(effectFunction);

  return <h1>I have rendered {count} times!</h1>;
}

export default UseEffectHook1;