import React from 'react'
import BotCard from "../components/BotCard"

export default function YourBotArmy(props) {

  const displayBots = props.bots.map(bot => {
    return <BotCard bot={bot} action={props.action} removeCard={props.removeCard} />
  })


  return (
    <div className="ui segment inverted purple bot-army">
     <h1 style={{textAlign:"center"}} role="img">The Bot-Battlr of Flatiron<span role="img" aria-label="robot">🤖</span></h1> 
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
        </div>
      </div>
    </div>
  )

}

