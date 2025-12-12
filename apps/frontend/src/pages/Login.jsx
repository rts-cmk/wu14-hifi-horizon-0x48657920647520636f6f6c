import { useState } from "react";
import "../styles/login.scss"
export default function LoginPage() {
  const [isLogin, setLogin] = useState(true);

  const SubmitLogin = (formdata) => {
    console.log(formdata)
  }

  return (
    <>
      <h1>LoginPage</h1>
      <form action={SubmitLogin}>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="form-group">
          <label for="name">Password</label>
          <input type="password" name="name" placeholder="Password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
