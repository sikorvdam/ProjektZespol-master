import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import '../css/style.css'
import car from "../images/lambo.jpg"
import mustang from "../images/mustang.jpg"
import bmw from "../images/bmw.jpg"
import { Contact } from './Contact';
import { About } from './About';
import { Footer } from './Footer';
import Button from '@restart/ui/esm/Button';
export const Home = () => {
        return(
            <div bg="dark">
                 <Container fluid>
                 <div className="row">
                 <div className="col-6">
      <h1 className="Header">  WsBCars z nami dojedziesz na pełnej kurwie !</h1>
      <div className="col-2" id="borderH1"></div>
        <p className="col-12" id="paragrafBaner">Jest nam niezmiernie miło że, odwiedzasz naszą stronę. Posiadamy w ofercie bogatą flotę pojazdów które na pewno Cię zainteresują !</p>
        <div className="row text-center">
        <div className="col-4">
                        <div className="img-thumbnail">
                        <img src={car} alt="Lamborghini" className="img-fluid" id="carThumbnail" />
                        <p>Lamborghini Gallardo</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="img-thumbnail">
                    <img src={mustang} alt="Lamborghini" className="img-fluid" id="carThumbnail" />
                        <p>Ford Mustang Shelby</p>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="img-thumbnail">
                    <img src={bmw} alt="Lamborghini" className="img-fluid" id="carThumbnail" />
                        <p>BMW M5</p>
                        </div>
                    </div>
        </div>
        <p className="col-12" id="paragrafDwaBaner">W myśli tworzenia naszej oferty położyliśmy nacisk na maksymalne dopasowanie względem Was klientów !</p>
        <div className="text-center">
       <a href="/about"> <button className="btn-primary">Sprawdź ofertę !</button></a></div>
      </div>
                 <div className="col-6">
      <figure className="position-relative">
        <img src={car} alt="Lamborghini" className="img-fluid" id="car" />
      </figure> 
      </div>
      </div>
      <Footer/>
    </Container>
 
  
  
   
</div>
           
        )
    }
