import React from "react";
import Nav from "./component/Nav";
import List from "./component/List";
import Data, { DataContext } from "./component/Data";


function App() {

  return (
   <Data>
   <Nav/>
   <List/>
    <Data/>
   </Data>
   
   
  )
}

export default App;
