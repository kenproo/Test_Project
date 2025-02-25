import React, { useState } from "react";
import "../styles/Login.scss";
import { login } from "../api/Auth";
import { Link , useNavigate} from "react-router-dom";
import "boxicons";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await login(formData);
      if (response.result.token) {
        localStorage.setItem("token", response.result.token);
      }
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <span className="bg-animate"></span>
        <div className="form-box-login">
          <h1>Login</h1>
          <form>
            <div className="input-box">
              <input
                type="text"
                name="username"
                required
                onChange={handleChange}
                value={formData.username}
              />
              <label>Username</label>
              <i>
                <box-icon name="user" class="icon"></box-icon>
              </i>
            </div>
            <div className="input-box">
              <input
                type={!isShowPassword ? "text" : "password"}
                name="password"
                required
                onChange={handleChange}
                value={formData.password}
              />
              <label>Password</label>
              <i onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <box-icon class="icon-password" name="lock-alt"></box-icon>
                ) : (
                  <box-icon
                    class="icon-password"
                    name="lock-open-alt"
                  ></box-icon>
                )}
              </i>
            </div>
            <button type="submit" onClick={handleLogin} className="btn">
              Login
            </button>
            <div className="logreg-link">
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link> </p>
            </div>
          </form>
        </div>
        <div className="infor-text-login">
          <h1>Welcome my channel</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
