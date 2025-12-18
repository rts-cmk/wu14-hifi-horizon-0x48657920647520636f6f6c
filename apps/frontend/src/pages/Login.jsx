import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/Auth";
import { login as apiLogin } from "../services/api";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const user = await apiLogin(username, password);
      if (user) {
        login(user);
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  }
  if(user) {
    console.log("user logged in, redirecting...", user);
    navigate("/");
  }

  return (
    <>
      <h1 className="main__title">LOGIN</h1>
      <section className="login-container">
        {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
        <article className="registered-customers">
          <h2 className="registered-customers__title">REGISTERED CUSTOMERS</h2>
          <p className="registered-customers__subtitle">If you have an account, sign in with your email address.</p>
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
            <button className="login-form__sign-in-btn" type="submit">Sign in</button>
          </form>
          <p className="registered-customers__fogort-password">Forgot your Password?</p>
        </article>
        <article className="new-customer">
          <h2 className="new-customer__title">NEW CUSTOMER</h2>
          <p className="new-customer__subtitle">Creating an account has many benefits: check out faster, track orders and more.</p>
          <button className="new-customer__register-btn" onClick={() => navigate("/register")}>Create an Account</button>
        </article>
      </section>
    </>
  )
}
