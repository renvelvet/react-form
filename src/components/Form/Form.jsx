import React, { useState } from "react";

import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [skills, setSkills] = useState("");
  const [gender, setGender] = useState("Male");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`
    Name: ${name}
    Email: ${email}
    Address: ${address}
    Birthdate: ${birthdate}
    Gender: ${gender}
    Skill: ${skills}`);
    //   alert()
  }
  function handleOptionChange(changeEvent) {
    setGender({ gender: changeEvent.target.value });
    setSkills({ skills: changeEvent.target.value });
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
            onChange={(event) => setName(event.target.value)}
            value={name}
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
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id=""
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
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Birthdate</label>
          <input
            type="date"
            className="form-control"
            name="birthdate"
            id=""
            placeholder="Ex:"
            onChange={(event) => setBirthdate(event.target.value)}
            value={birthdate}
          />
        </div>
        <div className="radio">
          <label>Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-control"
              name="gender"
              value="Male"
              //   checked={gender === "Male"}
              onChange={handleOptionChange}
              id=""
            />
            <label>Male</label>
            <input
              type="radio"
              className="form-control"
              name="gender"
              value="Female"
              id=""
              //   checked={gender === "Female"}
              onChange={handleOptionChange}
            />
            <label>Female</label>
          </div>
        </div>
        <div className="checkbox">
          <label>Skills</label>
          <div className="form-check">
            <label>Coding</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Coding"
              id=""
              onChange={handleOptionChange}
            />
            <label>Design</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Design"
              id=""
              onChange={handleOptionChange}
            />
            <label>Gaming</label>
            <input
              type="checkbox"
              className="form-control"
              name="skills"
              value="Gaming"
              id=""
              onChange={handleOptionChange}
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
