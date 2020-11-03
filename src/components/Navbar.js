import React, {useState} from 'react'
import { Button} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom"

  //helps us prevent the user from spamming the button
  //hook that helps us move to a different page
export default function Navbar() {
    
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  async function handleNewQuest(e) {
    //
    try{
    e.preventDefault()
      setError("")
      setLoading(true)
      history.push("/new-quest")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <>
      <div id="navBar" className="navbar">
        <div className = "avatar">
          <h1>Player portrait</h1>
        </div>
        <h1>Title card</h1>
        <Button onClick={<Link to="/new-quest">button</Link>}>
          New Quest
        </Button>
      </div>
    </>
  );
}
