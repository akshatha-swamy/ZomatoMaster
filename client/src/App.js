import React from "react";



//pages
import HomePage from "./pages/Home.page"; 
import BangalorePage from "./pages/Bangalore.Page";
import SignInEmailPage from "./pages/SigninEmail.page";
import SignInPage from "./pages/Signin.page";
import SignUpPage from "./pages/Signup.page";
import SigninPhonePage from "./pages/SigninPhone.page";

//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//components
import Master from "./component/Master";





function App() {
  return (
   <>
    <HomeLayoutHOC path='/' exact component={HomePage}/>
    <HomeLayoutHOC path='/bangaluru/:type' exact component={Master}/>
    <HomeLayoutHOC path='/bengaluru' exact component={BangalorePage}/>
    <HomeLayoutHOC path='/signin' exact component={SignInPage}/>
    <HomeLayoutHOC path="/signinemail" exact component={SignInEmailPage}/>
    <HomeLayoutHOC path="/signup" exact component={SignUpPage} />
    <HomeLayoutHOC path="/signinphone" exact component={SigninPhonePage}/>
    
   </>
  );
}

export default App;
