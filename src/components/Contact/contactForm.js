import React from 'react'

const contactForm = () => {
    return (   
        <>  
            <div>
                 <div className="row">
                     <div className="col-md-6 col-md-offset-3" id="form_container">
                    
                     <p className="contact-h6">
                     Please send your message below. I will get back to you at the earliest!
                     </p>
                     <form>           
                         <div className="row">
                             <div className="col-sm-6 form-group">
                                 <label htmlFor="name">
                                     Your Name:</label>
                                 <input type="text" 
                                 className="form-control" 
                                 id="name" 
                                 name="name" required
                                  />
                             </div>
                             <div className="col-sm-6 form-group">
                                 <label htmlFor="email">
                                     Email:</label>
                                 <input type="email" className="form-control" id="email" name="email" required                             
                                 />
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-12 form-group">
                                 <label for="message">
                                     Message:</label>
                                 <textarea className="form-control" type="textarea" name="message"
                                 id="message" maxLength="6000" rows="7"                              
                                 ></textarea>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-sm-12 form-group">
                                 <button type="submit" className="btn btn-lg btn-default pull-right">Send</button>
                             </div>
                         </div>
                     </form>
                         <div id="success_message">
                             <h3>Posted your message successfully!</h3>
                         </div>
                         <div id="error_message">
                                     <h3>Error</h3>
                                     Please re-submit. There was an error sending your e-mail.
                         </div>
                     </div>    
                 </div>
             </div>
            
        </>
    )
}

export default contactForm;
