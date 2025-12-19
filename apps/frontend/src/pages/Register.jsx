import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/Auth";
import { register as apiRegister } from "../services/api";

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
    <>
      <h1 className="main__title">CREATE AN ACCOUNT</h1>
      <section className="login-container">
        <article className="registered-customers">
          <h2 className="registered-customers__title">CREATE NEW CUSTOMER ACCOUNT</h2>
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          <form className="login-form" action={handleSubmit}>
            <div className="form-group">
              <label className="form-group__label" htmlFor="username">Full name <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="email">Email <span className="form-group__label--highlight">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="password">Password <span className="form-group__label--highlight">*</span></label>
              <input
                type="password"
                id="password"
                autoComplete="new-password"
                name="password"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="passwordRepeated">Confirm Password <span className="form-group__label--highlight">*</span></label>
              <input
                type="password"
                id="passwordRepeated"
                name="passwordRepeated"
                autoComplete="new-password"
                className="form-group__input" 
                required
              />
            </div>
            <h2 className="registered-customers__title">SHIPPING ADDRESS</h2>
            <div className="form-group">
              <label className="form-group__label" htmlFor="addressLine1">Address Line 1 <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                autoComplete="address-line1"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="addressLine2">Address Line 2 (Optional) <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                autoComplete="address-line2"
                className="form-group__input" 
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="city">City <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="state">State/Province <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="state"
                name="state"
                className="form-group__input" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="postalCode">Postal Code <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="form-group__input" 
                autoComplete="postal-code"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-group__label" htmlFor="country">Country <span className="form-group__label--highlight">*</span></label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-group__input"
                autoComplete="country"
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
