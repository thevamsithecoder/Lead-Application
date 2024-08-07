import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate("");

  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    number: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");

  const getdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/getuser/${id}`);
      const data = res.data;
      setInputValue(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();
    const { email, name, number } = inputValue;
    try {
      const res2 = await axios.patch(`http://localhost:8080/api/updateuser/${id}`, {
        email,
        name,
        number
      });
      alert("Data Updated Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Fill the data");
    }
  };

  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputemail1" className="form-label">email</label>
            <input
              type="text"
              name="email"
              onChange={setData}
              value={inputValue.email}
              className="form-control"
              id="exampleInputemail1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input
              type="text"
              name="Name"
              onChange={setData}
              value={inputValue.name}
              className="form-control"
              id="exampleInputName1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputnumber1" className="form-label">number</label>
            <input
              type="number"
              name="number"
              onChange={setData}
              value={inputValue.number}
              className="form-control"
              id="exampleInputnumber1"
            />
          </div>
          <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
