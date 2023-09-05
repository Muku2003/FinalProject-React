import React, { useState } from 'react';
import './BookingPage.css'; // Import your CSS file
import axios from 'axios';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    hotelId: '',
    checkInDate: '',
    checkOutDate: '',
  });
  const[info,setinfo]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8081/add`,formData)
        .then(response=>{console.log(response.data)})
           .catch(err=>{console.log(err)})
           alert("sucessfully Booked")
  };
  const get=(e)=>{
    e.preventDefault();
    axios.get('http://127.0.0.1:8081/show')
    .then(res => setinfo(res.data))
    .catch(error => {
      console.error(error);
    });
  };
  return (
    <div className="booking-page">
      <h1>HOTEL BOOKING</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label id='id' htmlFor="id">Booking ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="forms-group">
          <label id='nam' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id='hid' htmlFor="hotelId">Hotel ID:</label>
          <input
            type="text"
            id="hotelId"
            name="hotelId"
            value={formData.hotelId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id='cid'     htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div  id='cod' className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <button id='book' type="submit">Book Now</button>
        <button id='g'  onClick={get}>Get</button>
        {info.map((data)=>(
            <label>{data.id}
            {data.name}
            {data.hotelId}
            {data.checkInDate}
            {data.checkOutDate}
            
            </label>
        ))}
      </form>
    </div>
  );
};

export default BookingPage;