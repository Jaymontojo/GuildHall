import React, { useEffect, useState } from 'react';
import {  Container, Alert, Spinner, Card } from "react-bootstrap";
import { db } from '../firebase.js';
import AllQuests from './AllQuests.js';
import Navbar from './Navbar.js'


export default function HomeSplash() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [questCards, setQuestCards] = useState([])
  
  const questRef = db.collection("quests");
  // const snapshot = await questRef.get();

  function handleGetQuests() {
    setLoading(true)
    questRef.onSnapshot((querySnapshot) => {
      const quests = [];
      querySnapshot.forEach((doc) => {
        quests.push(doc.data());
      });
      setQuestCards(quests);
      setLoading(false);
    });
  }
  console.log(questCards)
  useEffect(() => {
    handleGetQuests()
  },[])

  if(loading) {
    return <Spinner animation="grow">Loading...</Spinner>
  }
  return (
    <>
      <Card
      className="d-flex align-items-center justify-content-center"
      >
        <Container>
          <Navbar></Navbar>
          {questCards.map((quest) => (
          <Card>
            <Card.Body>
              <h3><b>{quest.title}</b></h3>
              <h4>By: {quest.commisioner}</h4>
              <p>{quest.body}</p>
            </Card.Body>
          </Card>
        ))}
        </Container>
      </Card>
    </>
  )
}
