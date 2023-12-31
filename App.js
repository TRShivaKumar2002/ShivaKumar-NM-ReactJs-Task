import logo from './logo.svg';


  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
  
  import React, {useState} from "react";
    import "./index.css";
  
  

function App() {
  {
    const [values , setValues ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        courseName:"";
      });
    
      const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
      }
    
      const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
      }
    
      const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
      }
      const handleCourseInputChange = (event) => {
        setValues({...values, email: event.target.value})
      }
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleSubmit = (event ) => {
        event.preventDefault();
        setSubmitted(true);
      }
    return (
        <div class="form-container">
          <form class="register-form" onSubmit={handleSubmit}>
            {submitted ? <div className="success-message">Success! Your information has been submitted.</div> : null}
    
            
            <input
              value = {values.firstName}
              onChange={handleFirstNameInputChange}
              id="first-name"
              class="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
            />
    
            {submitted && !values.firstName ? <span>Please enter valid first name</span> : null}
    
            
            <input
              value = {values.lastName}
              onChange={handleLastNameInputChange}
              id="last-name"
              class="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
    
            
            {submitted && !values.lastName ? <span>Please enter valid last name</span> : null}
            
           
            <input
              value = {values.email}
              onChange={handleEmailInputChange}
              id="email"
              class="form-field"
              type="text"
              placeholder="Email"
              name="email"
            />
    
            
            {submitted && !values.email ? <span>Please enter valid email</span> : null}
            <input
              value = {values.courseName}
              onChange={handleCourseInputChange}
              id="course"
              class="form-field"
              type="text"
              placeholder="Course"
              name="Course"
            />
    
            
            {submitted && !values.courseName ? <span>Please enter valid email</span> : null}
            
            
            <button class="form-field" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      );
    }
    
  
   
}

export default App;
