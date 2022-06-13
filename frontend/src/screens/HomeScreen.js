import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

export default function HomeScreen() {
  const arr = [];
  return (
  <>
  <Helmet>
        <title>homepage</title>
    </Helmet>
    <h1 className='heading'>Eight</h1>
    <Container  className='btn-container'>
      <Row>
        <Col>
        <Button className='btn-homepage' variant="outline-light">Host</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
        <Button className='btn-homepage' variant="outline-light">Receiver</Button>{' '}
        </Col>
      </Row>
    </Container>
    <h1 className='username'>
     {/* {userName? userName : "log in"} */}
    </h1>
    
    
  </>
  )
}
