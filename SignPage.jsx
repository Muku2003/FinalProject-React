import React, { useState } from 'react';
import'./SignPage.css'
import axios from 'axios';
const SignPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    age: '',
    mail: '',
    mobileNo: '',
    aadharNo: '',
    password:'',
  });
  const[info,setinfo]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const get=(e)=>{
  e.preventDefault();
  axios.get('http://127.0.0.1:8081/showuser')
  .then(res => setinfo(res.data))
  .catch(error => {
    console.error(error);
  });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8081/adduser`,formData)
    .then(response=>{console.log(response.data)})
       .catch(err=>{console.log(err)})
       alert("submitted")
      
  };                                                                                                                                        return (
      <div className="sign-page">
      <h1 className='h1'>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar Number:</label>
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            required
          />
        </div>
        <button id='sign' type="submit">Signup</button>
        <button id='get'  onClick={get}>Get</button>                                                     {info.map((data)=>(
          <label>{data.userId}
          {data.name}
          {data.age}
          {data.mail}
          {data.aadharNo}
          {data.mobileNo}
          {data.password}
          </label>
          
        ))}
      </form>
    </div>
  );
};

export default SignPage;                                                                                                                                                                                 