import React from "react";



//pages
import HomePage from "./pages/Home.page"; 

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import Master from "./component/Master";

function App() {
  return (
   <>
    <HomeLayoutHOC path='/' exact component={HomePage}/>
    <HomeLayoutHOC path='/:type' exact component={Master}/>
   </>
  );
}

export default App;
