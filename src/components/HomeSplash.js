import React, { useEffect, useState } from 'react';
import {  Container, Spinner, Card, Button } from "react-bootstrap";
import { db } from '../firebase.js';
import NavigationBar from './NavigationBar.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomeSplash() {
  //const [track, setTrack] = useState("Track")
  const [loading, setLoading] = useState(false)
  const [questCards, setQuestCards] = useState([])
  
  const questRef = db.collection("quests");
  // const snapshot = await questRef.get();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
  }}

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
      <Card>
        <Container>
          <NavigationBar></NavigationBar>
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

        </Container>
      </Card>
    </>
  )
}
