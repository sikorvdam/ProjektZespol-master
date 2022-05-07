import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Table} from "react-bootstrap"
import { BsTelephone, BsMailbox, BsHouseDoor, BsFacebook, BsInstagram } from "react-icons/bs"

export const Footer = () => {
    
        return(
            <Container fluid className="container-fluid" id="footerContainer">
                <Container id="footerContainerC">
                    <Row id="footerRow">
                    
                        <div className="col-12 col-md-4">
                        <div className="text-center">
                        <h2 className="h2Footer">Kontakt</h2>
                        <Table size="sm">
  <tbody className="tbodyFooter">
    <tr className="trFooter">
      <td className="tdFooter"><BsTelephone/> +48 777 777 777</td>
    </tr>
    <tr className="trFooter">
      <td className="tdFooter"><BsMailbox/> wsbcars@gmail.com</td>
    </tr>
    <tr className="trFooter">
      <td className="tdFooter"><BsHouseDoor/> Ul. Jana Jakiegoś 42a /n Wrocław 53-239</td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                        <div className="col-12 col-md-3">
                        <div className="text-center">
                            <h2 className="h2Footer">Odwiedź nas</h2>
                            <Table size="sm">
  <tbody>
    <tr className="trFooter">
      <td className="tdFooter"><BsFacebook/></td>
      <td className="tdFooter"><BsInstagram/></td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="text-center">
                            <h2 className="h2Footer">Oferta</h2>
                            <Table size="sm">
  <tbody>
    <tr className="trFooter">
      <td className="tdFooter">Oferta</td>
      <td className="tdFooter">Kontakt</td>
    </tr>
  </tbody>
</Table>
                        </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        )
    }
