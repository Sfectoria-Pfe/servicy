import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


 function Questions() {
  return (
      <Accordion defaultActiveKey="0" className='container ' style={{marginTop:80}}>
       <div class="section_tittle">
             <p> You can always send us your questions and we will answer you the fastest we can.</p>
            <h2>Frequently Asks Questions</h2>
        </div>
        <Accordion.Item eventKey="0">
        <Accordion.Header>How does SRRVICY verifiy the pro workers ?</Accordion.Header>
        <Accordion.Body>
        We employ a rigorous combination of methods to ensure the reliability,
        competence, and good conduct of professionals on our platform. 
        This includes an initial registration with detailed information,
        manual verification of supporting documents, evaluation interviews,
        and the collection of professional references and client reviews.
        Continuous assessment is maintained, along with follow-up phone 
        calls to confirm customer satisfaction, allowing us to reassess
        or remove a professional in case of recurring issues.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is it more expensive to go through SERVICY ?</Accordion.Header>
        <Accordion.Body>
        No, there is no additional cost when going through SERVICY.
         The professional will charge the same price as if contacted
          directly, or even less through our promotional offers.
      </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
        <Accordion.Header> Does SERVICY take a commission?</Accordion.Header>
        <Accordion.Body>
        SERVICY does not charge any commission on its connections; the platform 
        is free for users. Our service providers pay a subscription fee after a 
        trial period on the app.
      </Accordion.Body>
        </Accordion.Item>
       </Accordion>
    
    )
}
export default Questions;
