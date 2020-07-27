import React from "react";
//include header and footer
import Header from "./components/Header";
import Footer from "./components/Footer";
//include App's css
import './App.css'

//html has header and footer all the time
const App = () => {
  return (
    <>
    <div>
        <Header></Header> 
    </div>
    <div>
        <Footer></Footer>
    </div>
    </>
  )
}

export default App;