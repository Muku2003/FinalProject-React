import React, { useState } from 'react';
import './HotelPage.css'; // Import your CSS file
import axios from 'axios';

const HotelPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    location: '',
  });
  const openGoogleLink = () => {
    const googleURL = 'https://www.google.com/maps/search/Hotels/@11.0198728,76.9753087,13z/data=!3m1!4b1?entry=ttu';
    window.open(googleURL, '_blank');
  };
  const[info,setinfo]=useState([])
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8081/addhotels`,formData)
        .then(response=>{console.log(response.data)})
           .catch(err=>{console.log(err)})
           alert("sucessfully Logined")
  };
  const get=(e)=>{
    e.preventDefault();
    axios.get('http://127.0.0.1:8081/showhotels')
    .then(res => setinfo(res.data))
    .catch(error => {
      console.error(error);
    });
  };                                                                                                                                    return(
   <div className="hotel-page">
      <h1>Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div className="formsh-group">
          <label id='ho' htmlFor="id">Hotel ID:</label>
          <input
            type="text"
            id="ho"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formsh-group">
          <label id='na' htmlFor="name">Name:</label>
          <input
            type="text"
            id="na"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formsh-group">
          <label id='location' htmlFor="loction">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
         <button id='hl' type="submit">HotelLocation</button>
        <button id='ge'  onClick={get}>Get</button> 
        <button id='googleButton' onClick={openGoogleLink}>LocationHotels</button>
      

  {info.map((data)=>(
            <label>{data.id}
            {data.name}
            {data.location}
            </label>
  ))}
  </form>
</div>
);
  };
  export default HotelPage;