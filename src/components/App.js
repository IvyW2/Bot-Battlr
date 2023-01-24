import React from "react";
import BotsPage from "./BotsPage";

function App() {
  const [botCollection, setBotCollection] = React.useState([]) 
  const [checkBotCollection, setCheckBotCollection] = React.useState(false) 

  //fetching data from the server
  React.useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(bots => {
        
        setBotCollection(bots)
      })
      
  }, [checkBotCollection]) 
  
  return (
    <div className="App">
      <BotsPage 
      
      botCollection = {botCollection}
      setBotCollection = {setBotCollection}
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;
