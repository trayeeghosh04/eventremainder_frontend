import React,{useState} from 'react'
import ProjectContext from './projectContex'
function Eventstate(props) {
    const host = "http://localhost:8000";
    const informatioInitial = [];
    const[info , setinfo] = useState(informatioInitial)
    const addetails = async (reminderMsg,remindAt) => {
      const response = await fetch(`${host}/api/events/addReminder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({reminderMsg,remindAt}),
      });
      const addEvet = await response.json();
      if(addEvet.success){
        setinfo(info.concat(addEvet))
        console.log(addEvet);
      }else{
        console.log("error")

      }
    };

    const fetchEvents = async () => {
      const response = await fetch(`${host}/api/events/alleventinfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
            
        },
      });
      const json = await response.json();
      setinfo(json);
    };
    const deleteEvents = async (id) => {
      const response = await fetch(`${host}/api/events/deleteevent/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
            
        },
      });
        await response.json()
      const NewNode = info.filter((info) => {
        return info._id !== id;
      });
      setinfo(NewNode);
    };

  return (
    <div>
      <ProjectContext.Provider value={{info,addetails,fetchEvents,deleteEvents}}>
      {props.children}
      </ProjectContext.Provider>
    </div>
  )
}

export default Eventstate
