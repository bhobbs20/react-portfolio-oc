import React, { Component } from 'react';
import '../styles/components/contact.css';

import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


class Contact extends Component {
 
  render() {
    return (
      <div className="contact container">

      <h1 className="contact-title text-center">CONTACT</h1>
     <p className="text-center contact-p">Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>

      <div className="container contact-form">
     
      <Row>
      
      <Col lg="8">
      <Form>
        <FormGroup>
          <Input type="name" name="name" id="contactName" placeholder="Name"/>
        </FormGroup>

        <FormGroup>
          <Input type="email" name="email" id="contactEmail" placeholder="Email"/>
        </FormGroup>

        <FormGroup>
          <Input type="phone" name="phone" id="contactPhone" placeholder="Number"/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="message" id="contactMessage" placeholder="Message me"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Col>
      <Col className="contact-details" lg="4">
      <div>
        <h4>Location</h4>
        <p className="text-muted">Georgetown, MA 01833</p>

        <h4>Phone</h4>
        <p className="text-muted">978-500-4457</p>

        <h4>Email</h4>
        <p className="text-muted">brianhobbs216@gmail.com</p>

        <h4>Social</h4>
        <p className="text-muted">github twitter</p>
      </div>

      </Col>

      </Row>
      </div>
       

      </div>
    );
  }
}

export default Contact;