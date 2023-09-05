import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SignPage from './signup/SignPage';
import Login from './login/LoginPage';
import BookingPage from './booking/BookingPage';
import HotelPage from './hotel/HotelPage';
import HotelContact from './hotelcontact/HotelContact';
import HomePage from './home/HomePage';


function App() {

  return (
  <div>
  <Router>
      <Routes>
      <Route path="/" exact element={<HomePage></HomePage>} />
      <Route path="/signup" element={<SignPage></SignPage>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/hotel" element={<HotelPage></HotelPage>} />
      <Route path="/booking" element={<BookingPage></BookingPage>} />
      <Route path="/contact" element={<HotelContact></HotelContact>} />
   
      </Routes>
    </Router>
  </div>
  )
}

export default App;