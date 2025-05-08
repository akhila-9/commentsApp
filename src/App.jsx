import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalStyles } from "./CommentsApp/CommentsApp.Styled";
import CommentsApp from "./CommentsApp/CommentsApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
       <CommentsApp/>
     
    </>
  );
}

export default App;
