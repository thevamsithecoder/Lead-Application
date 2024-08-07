import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [getUserData, setUserData] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/getdata");
    
      if (res.status === 422 || !res.data) {
        console.log("error");
      } else {
        setUserData(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata(); //when ever the page loads useEffect hook called
  }, []);

  const deleteuser = async (id) => {
    try {
      const res2 = await axios.delete(`http://localhost:8080/api/deleteuser/${id}`);
      console.log(res2.data);

      if (res2.status === 422 || !res2.data) {
        console.log("error");
      } else {
        console.log("user deleted");
        getdata();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <Link to="/register" className="btn btn-primary">
            Add Data
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr className="table-info">
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getUserData.map((element, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id + 1}</th>
                  <td>{element.email}</td>
                  <td>{element.name}</td>
                  <td>{element.number}</td>
                  <td className="d-flex justify-content-between">
                
                    <Link to={`/edit/${element._id}`}>
                      <button className="btn btn-warning">
                        <CreateIcon />
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteuser(element._id)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
