import { useState } from "react";
import SigninFormVector from "../components/signinform";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import { Header, Footer } from "../components/headerandfooter";
import "../css files/landingPage.css";
import "../css files/accountType.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useAdminSignin } from "../hooks/use-admin-signin";
import { useAuth } from "../hooks/use-auth";

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For programmatic navigation
  const { setAndPersistAuth } = useAuth();
  const { adminSigninError, adminSigninLoading, startAdminSignin } =
    useAdminSignin({
      onSuccessCallback: (apiResponse) => {
        // store auth data in local storage
        setAndPersistAuth(apiResponse.data);
        // Navigate to admin dashboard after successful signin
        navigate("/admin-dashboard");
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await startAdminSignin({ email, password });
  };

  return (
    <div>
      <Header />
      <div className="main-body">
        <div className="mainbody__container">
          <SigninFormVector Type={"Admin"} />
          <div className="signinForm__div">
            <div className="signinFormHeader">Sign in</div>
            {adminSigninError && (
              <p className="error-message">{adminSigninError}</p>
            )}
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

              <button
                className="signinForm__btn blue--btn"
                disabled={adminSigninLoading}
              >
                {adminSigninLoading ? "Signing in..." : "Sign In"}
                <EastRoundedIcon />
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminSignin;
