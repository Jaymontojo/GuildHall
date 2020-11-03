import React, { useEffect, useState } from 'react';
import {  Container } from "react-bootstrap";
import { db } from '../firebase.js';
import AllQuests from './AllQuests.js';
import Navbar from './Navbar.js'


export default function HomeSplash() {
  const [error, setError] = useState("")
  const [questCards, setQuestCards] = useState([])
  useEffect(() => {
    

  }, [])
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Container>
        <AllQuests></AllQuests>
      </Container>
    </>
  )
}
