import React, { useRef, useState } from "react"
import { Button, Card, Container } from "react-bootstrap"

export default function AllQuests(props) {

  return (
    <Container>
      <h1>Active Quests</h1>
      {props.questCards.map((quest) => (
        <Card>
          <Card.Body>
            <h1>{props.quest.title}</h1>
            <h2>{props.quest.commissioner}</h2>
            <p>{props.quest.body}</p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}
