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
         <Row text-center id="rowContact">
                <div className="col-12 col-md-6">
                    <h3 className="contactH1">ZAMÓW REZERWACJE JUŻ DZISIAJ</h3>
                    <p className="paragrafContact">Skorzystaj z naszego formularza kontaktowego celem informacji lub rezerwacji samochodu. Skontaktujemy się !</p>
                </div>
                <div className="col-12 col-md-5">
                <div className="text-center">
                <Form >
                <a href="https://us10.list-manage.com/contact-form?u=f2ddef379726cc56b4d6a3e8b&form_id=ee7f916f75dbd93ab85ee129a6a54930">
                <Button type="button" className="buttonmail">Kliknij tu aby przejść do formularza </Button>
                </a>
                
                

</Form>
</div>
</div>
</Row>
</Container>
<Footer/>
            </div>
            
        )
    };
