//import { render } from '@testing-library/react';
import React from 'react';

// Import from formspree.io
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjvjaryq")
    if(state.succeeded) {
        return <p>Thank you for your email!</p>
    }
    return (
     <div className="col-md-6 col-md-offset-3" id="form_container">    
      <form onSubmit={handleSubmit}>
      Please enter your full name
      <label for="full-name">
          </label>
          {""}    
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      Type your message here
      {""}
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default ContactForm;



