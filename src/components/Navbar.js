import React from 'react'
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navbar() {


  return (
    <>
      <div id="navBar" className="navbar">
        <div className = "avatar">
          <h1>Player portrait</h1>
        </div>
        <h1>Title card</h1>
        <Button >
          New Quest
          <Link to="/new-quest">button</Link>
        </Button>
      </div>
    </>
  );
}
