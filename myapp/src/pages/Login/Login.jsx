import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const[error , setError] = useState("");

  const[isLoading , setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("");
    setIsLoading(true)
    const formData = new FormData(e.target)

    const username = formData.get('username')
    const password = formData.get('password')
    console.log(username);
    try {
      const res = await apiRequest.post('/auth/login', {
        username,
        password
      });
      console.log(res);
      updateUser(res.data)
      navigate("/");
      // navigate("/login");
    } catch (err) {
       console.log(err)
      // console.log(err.);
      setError(err.response);
    }
    finally{
      setIsLoading(false);
    }
    console.log(username, password)
  }


  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength = {20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disable={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;