
import './App.css';
import AddbirthdayDate from './components/AddbirthdayDate';
import Register from  './components/Register'
import Login from './components/Login'
import Eventstate from './contex/user/Eventstate.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Eventstate>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Register></Register>}/>
      <Route exact path="/login" element={<Login></Login>}/>
      <Route exact path="/dashboard" element={ <AddbirthdayDate></AddbirthdayDate>}/>
      </Routes>
      </BrowserRouter>
      </Eventstate>
    </div>
  );
}

export default App;
