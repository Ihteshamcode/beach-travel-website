import React from "react";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Video from "./components/Video";
function App() {
  return (
    <>
      <Navbar/>
      <Video/>
      <Destination/>
      <Search/>
      <Footer/>
    </>
  );
}

export default App;
