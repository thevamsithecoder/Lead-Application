import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    number: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setInputValue((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const addInputData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/register", inputValue);
      console.log(res.data);
      alert("Whoa! Data Added Successfully");
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        alert("Error: " + (error.response.data.error || "An error occurred"));
      } else if (error.request) {
        console.error("Network error:", error.request);
        alert("Network error: Please try again later");
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={setData}
              value={inputValue.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={setData}
              value={inputValue.name}
              className="form-control"
              id="exampleInputName"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputNumber" className="form-label">
              Number
            </label>
            <input
              type="number"
              name="number"
              onChange={setData}
              value={inputValue.number}
              className="form-control"
              id="exampleInputNumber"
            />
          </div>
          <button
            type="submit"
            onClick={addInputData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
