import React from "react";
import './App.css';
import Head from './Components/Head';
import Offer from './Components/Offer';
import Content from './Components/Content';
import PageNavi from "./Components/PageNavi";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Login from "./Components/LoginPg";


function App() {


  return (

    <div className="App">
      <Head/>
      <Offer/>
      <Content/>
      <PageNavi/>
      <Footer />
    </div>
  );
}

export default App;
