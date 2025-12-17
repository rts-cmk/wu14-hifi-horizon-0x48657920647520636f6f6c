import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/Auth";
import { register as apiRegister } from "../services/api";
import "../styles/login.scss"

export default function RegisterPage() {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordRepeated = formData.get("passwordRepeated");
    const addressLine1 = formData.get("addressLine1");
    const addressLine2 = formData.get("addressLine2");
    const city = formData.get("city");
    const state = formData.get("state");
    const postalCode = formData.get("postalCode");
    const country = formData.get("country");

    if (password !== passwordRepeated) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
        shipping: {
          addressLine1,
          addressLine2: addressLine2 || undefined,
          city,
          state,
          postalCode,
          country
        }
      };
      console.log(userData)
      const user = await apiRegister(userData);
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
      <form action={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="new-password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordRepeated">Confirm Password</label>
          <input
            type="password"
            id="passwordRepeated"
            name="passwordRepeated"
            autoComplete="new-password"
            placeholder="Confirm Password"
            required
          />
        </div>

        <h2>Shipping Address</h2>

        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            autoComplete="address-line1"
            placeholder="Street address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address Line 2 (Optional)</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            autoComplete="address-line2"
            placeholder="Apartment, suite, etc."
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="address-level2"
            placeholder="City"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State/Province</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State/Province"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Postal Code"
            autoComplete="postal-code"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            autoComplete="country"
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
