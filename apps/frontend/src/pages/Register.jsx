import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/Auth";
import { register as apiRegister } from "../services/api";
import "../styles/login.scss"
import React from "react"
export default function RegisterPage() {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  /**
   * 
   * @param {FormData} formdata 
   */
  const handleSubmit = async (formdata) => {
    setError("");
    const name = formdata.get("name");
    const adress = formdata.get("name");
    const adress2 = formdata.get("name");
    const zipCode = formdata.get("name");
    const city = formdata.get("city");
    const country = formdata.get("name");
    const phone = formdata.get("phone");
    const email = formdata.get("email");
    const password = formdata.get("password");
    const passwordRepeated = formdata.get("passwordRepeated");
    const marketing = formdata.get("marketing")
    const acceptDataCollection = formdata.get("dataCollection")

    try {
      const user = await apiRegister(username, email, password);
      if (user) {
        login(user);
        navigate("/");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    }
  }

  return (
    <div className="login-container">
      <h1>Register</h1>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jhon Doe"
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  )
}
