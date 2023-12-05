import React from "react";

//pages
import HomePage from "./pages/Home.page"; 

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

function App() {
  return (
   <>
    <HomeLayoutHOC path='/' exact component={HomePage}/>
   </>
  );
}

export default App;
