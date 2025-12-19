import React from 'react'
import {useState, useEffect } from 'react'
const Counter = () => {
      const [count, setCount] = useState(0);
  const [name, setName] = useState("Puja");



   //  No dependency array -- runs after every render
  useEffect(() => {
    console.log(" Runs after every render ");
  }); 

  //  Empty dependency array -- runs once (on mount)
  useEffect(() => {
    console.log(" Runs only once when component mounts");
  }, []);


   // useEffect runs after every render where count changes
   useEffect(() => {
    console.log(` Count changed: ${count}`);
    document.title = `Clicked ${count} times`;
  }, [count]); // dependency array = [count]


  useEffect(() => {
    console.log(`Count or Name changed: count=${count}, name=${name}`);
  }, [count, name]);

  return (
  <>

<main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Counter with useEffect</h1>

      <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>

      <button onClick={() => setName(name === "Puja" ? "Dhital" : "Puja")}>
        Change Name: {name}
      </button>
    </main>


  </>
  )
}

export default Counter