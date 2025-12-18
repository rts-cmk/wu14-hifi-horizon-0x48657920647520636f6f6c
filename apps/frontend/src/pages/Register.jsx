import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/Auth";
import { register as apiRegister } from "../services/api";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
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
    <>
      <h1 className="main__title">CREATE AN ACCOUNT</h1>
      <section className="login-container">
        <article className="registered-customers">
          <h2 className="registered-customers__title">CREATE NEW CUSTOMER ACCOUNT</h2>
          {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-group__label" htmlFor="username">Username <span className="form-group__label--highlight">*</span></label>
              <input 
                type="text" 
                id="username"
                name="username" 
                className="form-group__input" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="email">Email <span className="form-group__label--highlight">*</span></label>
              <input 
                type="email" 
                id="email"
                name="email" 
                className="form-group__input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="password">Password <span className="form-group__label--highlight">*</span></label>
              <input 
                type="password" 
                id="password"
                name="password" 
                className="form-group__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="login-form__sign-in-btn" type="submit">Create an Account</button>
          </form>
        </article>
      </section>
    </>
  )
}
