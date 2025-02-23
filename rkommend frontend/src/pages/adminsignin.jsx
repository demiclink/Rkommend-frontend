import React, { useState } from "react";
import SigninFormVector from "../components/signinform";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import { Header, Footer } from "../components/headerandfooter";
import "../css files/landingPage.css";
import "../css files/accountType.css";

import EastRoundedIcon from "@mui/icons-material/EastRounded";

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const credentials = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://rkommend-server.onrender.com/api/admins/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Logged in successfully:", data);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Failed to log in");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="main-body">
        <div className="mainbody__container">
          <SigninFormVector Type={"Admin"} />
          <div className="signinForm__div">
            <div className="signinFormHeader">Sign in</div>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Show error if exists */}
            <form onSubmit={handleSubmit}>
              <div className="signinForm__emaildiv">
                <label htmlFor="email"> Email</label>
                <input
                  className="email"
                  id="email"
                  type="email"
                  placeholder="Enter your official email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="signinForm__passworddiv">
                <label htmlFor="password"> Password</label>
                <input
                  className="password"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="signinForm__btn blue--btn" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
                <EastRoundedIcon />
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdminSignin;
