import React, { useEffect, useState } from "react";
import "./form.scss";
import { Link, useNavigate, useParams } from "react-router-dom";

// CRUD
// Create - POST method - create a data
// Read - GET method - list down data
// Update - PUT method - edit particular data
// Delete - DELETE method - delete any data

export default function Form() {
  const params = useParams();
  console.log("***", params);
  const storeValue = JSON.parse(localStorage.getItem("user")) || [];
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.id) {
      setUser(storeValue[params.id]);
    }
  }, []);

  const handleChange = (element) => {
    const { name, value } = element.target;
    const userData = { ...user, [name]: value };
    setUser(userData);
  };

  const handleSubmit = () => {
    if (params?.id) {
      let updatedData = storeValue.map((el, ind) => {
        return ind === parseInt(params.id) ? user : el;
      });
      localStorage.setItem("user", JSON.stringify(updatedData));
    } else {
      localStorage.setItem("user", JSON.stringify([...storeValue, user]));
    }
    navigate("/table");
  };
  return (
    <div className="login-bg">
      <div className="container">
        <div className="login">
          <form>
            <h1>Login Form</h1>
            <label>
              Full Name:
              <input
                required
                value={user.name}
                type="text"
                name="name"
                onChange={(element) => handleChange(element)}
              />
            </label>
            <label>
              Email:
              <input
                required
                value={user.email}
                type="text"
                name="email"
                onChange={(element) => handleChange(element)}
              />
            </label>
            <label>
              Password:
              <input
                required
                value={user.password}
                type="password"
                name="password"
                onChange={(element) => handleChange(element)}
              />
            </label>
            <div className="btn">
              <Link to={"/table"}>
                <button type="button" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
