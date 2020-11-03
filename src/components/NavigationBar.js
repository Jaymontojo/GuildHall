import React from 'react'
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"


  //helps us prevent the user from spamming the button
  //hook that helps us move to a different page

export default function NavigationBar() {
  
  const history = useHistory()
  
  function handleNewQuest(e) {
    e.preventDefault()
      history.push("/new-quest")
  }
  return (
      <div id="navBar" className="navbar">
        <div className = "avatar">
          <h1>Player portrait</h1>
        </div>
        <h1>Title card</h1>
        <Button onClick={handleNewQuest}>
          New Quest
        </Button>
      </div>
  );
}
