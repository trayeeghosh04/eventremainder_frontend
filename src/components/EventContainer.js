import React, { useContext } from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import eventstate from "../contex/user/projectContex";
import 'bootstrap/dist/css/bootstrap.min.css';
function EventContainer(props) {
  const eventDetails = useContext(eventstate);
  const { deleteEvents } = eventDetails;
  const { iteam } = props;
  return (
   <>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{iteam.reminderMsg}</Card.Subtitle>
        <Card.Text>
        {String(new Date(iteam.remindAt.toLocaleString(undefined, {timezone:"Asia/Kolkata"})))}
        {/* {iteam.remindAt} */}
        </Card.Text>

        <Button variant="warning" onClick={()=>deleteEvents(iteam._id)}>Delete</Button>{' '}
       
      </Card.Body>
    </Card>
   </>
     
    
  );
}

export default EventContainer;
