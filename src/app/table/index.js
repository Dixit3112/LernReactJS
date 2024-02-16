import React, { useState } from "react";
import "./table.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Table() {
  const [storeValue, setStoreValue] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  console.log(storeValue);
  const navigate = useNavigate();
  const handleEdit = (index) => {
    navigate(`/form/${index}`);
  };
  const handleDelete = (index) => {
    let updatedStoreValue = storeValue.filter((_, i) => i !== index);
    setStoreValue(updatedStoreValue);
    localStorage.setItem("user", JSON.stringify([...updatedStoreValue]));
  };
  return (
    <div className="table-bg">
      <div className="container">
        <div className="data">
          <h1>Your Data in Table Foramte</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {storeValue.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="btn">
            <Link to="/form">
              <button>Back to login page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
