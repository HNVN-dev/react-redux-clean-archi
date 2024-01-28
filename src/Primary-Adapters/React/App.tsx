import { useState } from "react";

function App() {
  const [text, setText] = useState("React Redux Clean architecture starter");

  return (
    <>
      <h1>Test</h1>
      <div>
        <p>{text}</p>
        <input />
      </div>
    </>
  );
}

export default App;
