import React, { useState,useEffect,useContext } from "react";
import eventstate from "../contex/user/projectContex";
import DateTimePicker from "react-datetime-picker"
import { useNavigate } from 'react-router-dom';
import Navlnks from "./Navlnks";
import EventContainer from "./EventContainer";
import'../css/logoutBtn.css'
import '../css/addevent.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default function AddbirthdayDate() {
  const eventDetails = useContext(eventstate);
  const{addetails,info,fetchEvents} = eventDetails
  const Navigate = useNavigate()
  useEffect(()=>{
    let userToken = localStorage.getItem('token')
    if(userToken === ''|| userToken === null){
      Navigate('/login')
    }
  })
useEffect(()=>{
   fetchEvents()
})
  const [ msg, setmsg ] = useState("")
  const [ remindTime, setremindTime ] = useState()
  const handleSubmit =  (e)=>{
    e.preventDefault()
    e.preventDefault()
    console.log(msg)
    // console.log(remindAt)
    setmsg(" ")
    setremindTime()
    addetails(msg,remindTime)

  }
   
  return (
    <> 
    <Navlnks/>
<div className='bodystructure'>
        <div className="containers">
          <div className="title"><h1> <b> Add Todo</b></h1></div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Add your Todos</span>
                  <input type="text" placeholder="Enter your Todos" name="name" id="name"  value={msg} onChange={e => setmsg(e.target.value)} minLength={3} required />
                </div>

                <DateTimePicker 
            value={remindTime}
            name="time"
            onChange={setremindTime}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
          />
                
          {/* <span></span> */}
         
          </div>
        
                
  
              <div className="button">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      


        {
          info.map((iteam,index) => {
          return <EventContainer key={iteam._id} iteam={iteam} />;
      })}
  


   
   </>  
  );
      }
 