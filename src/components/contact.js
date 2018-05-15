import React, { Component } from 'react';
import '../styles/components/contact.css';

import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';


class Contact extends Component {
 
  render() {
    return (
      <div className="contact">

      <div className="container contact-form">
      <h3 className="text-center">Contact Me</h3>

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
      
      </div>
       

      </div>
    );
  }
}

export default Contact;