import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPeople() {
  let navigat = useNavigate();

  const [people, setPeople] = useState({
    name: "",
    gender: "",
    age: "",
  });
  const { name, gender, age } = people;

  const onInputChange = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/people/save", people);
    navigat("/GetAllPeople");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mid-6 offset rounded p-4 mt-2  shdow">
          <h3 className="text-center">Add people</h3>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="from-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your gender"
                name="gender" // <-- Updated to 'gender'
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Age" className="from-label">
                Age
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
