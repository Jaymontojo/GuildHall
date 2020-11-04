import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext"
import {  Container, Spinner, Card, Button, Navbar } from "react-bootstrap";
import { db } from '../firebase.js';
import AllQuestHeader from './AllQuestHeader.js'
import UserPanel from './UserPanel.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomeSplash() {
  //const [track, setTrack] = useState("Track")
  const [loading, setLoading] = useState(false)
  const [questCards, setQuestCards] = useState([])
  const [trackedQuestCards, setTrackedQuestCards] = useState([])
  const { currentUser } = useAuth()
  
  const questRef = db.collection("quests");
  // const snapshot = await questRef.get();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
  }}



  //this fetches particularly for user tracked fetch cards.
  function handleGetTrackedQuests() {
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

  //this upodates our general pool of task cards in real time
  function handleGetGenQuests() {
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
 
  useEffect(() => {
    handleGetGenQuests()
    console.log(currentUser)
  },[])

  if(loading) {
    return <Spinner animation="grow">Loading...</Spinner>
  }
  return (
    <>
      <Container>
        <UserPanel/>
      </Container>
      <Container>
        
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </Container>
        </Navbar>
            <AllQuestHeader/>
        <Card>
          <Carousel   
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {questCards.map((quest) => ( 
              <Card> 
                <Card.Header>
                    <h3><b>{quest.title}</b></h3>
                  <Card.Body>
                    <h4>By: {quest.commisioner}</h4>
                    <p>{quest.body}</p>
                    <Button>Track</Button>
                  </Card.Body>
                </Card.Header>
              </Card> 
            ))}
          </Carousel>
        </Card>         
      </Container>
    </>
  )
}
