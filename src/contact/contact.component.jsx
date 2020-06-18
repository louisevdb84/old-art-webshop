import React, { Component } from 'react';
import './contact.styles.scss';
import { Card } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (      
      <Card id="contact">
      <div class="container">
          <h1>Contact Me</h1>
          <br></br>
      <form>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit"/>

          </form>
          
        </div>
        </Card>
    );
  }
}

export default Contact;