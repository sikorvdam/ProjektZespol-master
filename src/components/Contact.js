import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button,Container,Row } from 'react-bootstrap'
import { Footer } from './Footer'
export const Contact = () => {
    
        return(
            <div>
                <Container fluid id="containerContact">
                <h1 className="contactH1">Kontakt</h1>
                <div className="col-1" id="borderH1"></div>
         <Row text-center>
                <div className="col-12 col-md-6">
                    <h3 className="contactH1">ZAMÓW REZETWACJE JUŻ DZISIAJ</h3>
                    <p className="paragrafContact">Skorzystaj z naszego formularza kontaktowego celem rezerwacji samochodu. Oddzwonimy !</p>
                </div>
                <div className="col-12 col-md-5">
                <div className="text-center">
                <Form>
  <fieldset>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="TextInput">Imię i nazwisko:</Form.Label>
      <Form.Control id="TextInput" placeholder="Imię i nazwisko" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="Select">Wybierz pojazd:</Form.Label>
      <Form.Select id="Select">
        <option>Lamborghini Gallardo</option>
        <option>Ford Mustang Shelby</option>
        <option>BMW M5</option>
      </Form.Select>
      <Form.Group className="mb-3">
      <Form.Label htmlFor="TextInput">Numer telefonu:</Form.Label>
      <Form.Control id="TextInput" placeholder="+48 555 555 555" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Adres e-mail:</Form.Label>
    <Form.Control type="email" placeholder="przykladowy@przykladowy.com" />
  </Form.Group>
    </Form.Group>
    <Button type="submit">Wyślij</Button>
  </fieldset>
</Form>
</div>
</div>
</Row>
</Container>
<Footer/>
            </div>
            
        )
    };
