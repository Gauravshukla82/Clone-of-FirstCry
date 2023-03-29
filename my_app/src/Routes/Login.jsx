import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.token);
        login(json.token);
      });
  };

  // redirect to desired page after login
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              data-testid="password-input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <input
            data-testid="form-submit"
            type="submit"
            value="SUBMIT"
            onSubmit={handleLogin}
          />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
