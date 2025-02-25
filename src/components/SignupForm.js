import React, { useState } from "react";
import "../styles/SignupForm.scss";
function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    dob: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) errors.password = "Password is required";
    if (!formData.firstname) errors.firstname = "First name is required";
    if (!formData.lastname) errors.lastname = "Last name is required";
    if (!formData.dob) errors.dob = "Date of birth is required";

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here (e.g., send data to a server)
      alert("Registration successful!");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
       <div className = "wrapper"> 
      
      <form onSubmit={handleSubmit} className="form-box-signup">
      <h1>Register</h1>
       
        <div className = "input-box">
      
        <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
            <label>Username</label>
          
          
         </div>
     

        <div className = "input-box">
        
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <label >Password</label>
         
          {formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}


        </div>
       

        <div className = "input-box">
       
          <input
          required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
           <label className="email">Email</label>
            
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        {/* First Name */}
        <div className = "input-box">
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            required
            onChange={handleChange}
          />
                 <label >First Name</label>

          {formErrors.firstname && (
            <p className="error">{formErrors.firstname}</p>
          )}
        </div>

        {/* Last Name */}
        <div className = "input-box">
       
        <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
           <label className="lastname">Last Name</label>
          {formErrors.lastname && (
            <p className="error">{formErrors.lastname}</p>
          )}
      
         
          </div>
        <div className = "input-box">
        
        <input
            type="date"
            id="dob"
            className ="input-dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <label className="label-dob">Date of Birth</label>
          {formErrors.dob && <p className="error">{formErrors.dob}</p>}
        
         
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
}

export default RegisterForm;
