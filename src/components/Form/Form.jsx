import React, { useState } from "react";

import "./Form.css";

function Form() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    birthdate: "",
    gender: "",
    skills: [],
  });

  const handleChange = (event) => {
    if (event.target.name === "skills") {
      if (event.target.checked) {
        setdata({ ...data, skills: [...data.skills, event.target.value] });
      } else {
        // skill unchecked
        setdata({
          ...data,
          skills: data.skills.filter((a) => a !== event.target.value),
        });
      }
    } else {
      setdata({ ...data, [event.target.name]: event.target.value });
    }
  };
  function handleSubmit(event) {
    event.preventDefault();

    alert(`
    Name: ${data.name}
    Email: ${data.email}
    Password: ${data.password}
    Address: ${data.address}
    Birthdate: ${data.birthdate}
    Gender: ${data.gender}
    Skill: ${data.skills}`);
  }

  return (
    <div className="formRegister">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id=""
            placeholder="Nama Lengkap"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id=""
            placeholder="Email Address"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id=""
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            className="form-control"
            id=""
            cols="10"
            rows="4"
            placeholder="Address"
            onChange={handleChange}
            value={data.address}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Birthdate</label>
          <input
            type="date"
            className="form-control"
            name="birthdate"
            id=""
            onChange={handleChange}
            value={data.birthdate}
          />
        </div>
        <div className="radio">
          <label htmlFor="male">Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-control"
              name="gender"
              value="Male"
              onChange={handleChange}
              id=""
            />
            <label htmlFor="female">Male</label>
            <input
              type="radio"
              className="form-control"
              name="gender"
              value="Female"
              id=""
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
        </div>
        <div className="checkbox">
          <label>Skills</label>
          <div className="form-check">
            <label htmlFor="coding">Coding</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Coding"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="design">Design</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Design"
              id=""
              onChange={handleChange}
            />
            <label htmlFor="gaming">Gaming</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Gaming"
              id=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input type="submit" value="Register" id="register" />
        </div>
      </form>
    </div>
  );
}

export default Form;
