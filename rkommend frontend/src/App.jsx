import "./css files/landingPage.css";
import Home from "./pages/Home";
import AccountType from "./pages/accountType";
import { Routes, Route } from "react-router-dom";
import Studentaccountcreation from "./pages/studentaccountcreation";
import Lectureraccountcreation from "./pages/lectureraccountcreation";
import Signintype from "./pages/signinType";
import Lecturersignin from "./pages/lecturersignin";
import Studentsignin from "./pages/studentsignin";
import SDHome from "./pages/studentsdashboard/sd-home";
import Createeducationrecord from "./pages/studentsdashboard/createeducationrecord";
import Createrecommedationrequests from "./pages/studentsdashboard/createrecommedationrequests";
import LDhome from "./pages/lecturerdashboard/ld-home";
import Notifications from "./pages/lecturerdashboard/notifications";
import Admindashboard from "./pages/admindashboard/admin-dashboard";
import AdminSignin from "./pages/adminsignin";
import UserContextProvider from "./components/user-context-provider";

const App = () => {
  return (
    <main className="main-content">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accountType" element={<AccountType />} />
          <Route
            path="/createaccount-student"
            element={<Studentaccountcreation />}
          />
          <Route
            path="/createaccount-lecturer"
            element={<Lectureraccountcreation />}
          />
          <Route path="/signinType" element={<Signintype />} />
          <Route path="/signin-lecturer" element={<Lecturersignin />} />
          <Route path="/signin-student" element={<Studentsignin />} />
          <Route path="/home-student" element={<SDHome />} />
          <Route
            path="/createeducationrecord"
            element={<Createeducationrecord />}
          />
          <Route
            path="/createrecommendationrequests"
            element={<Createrecommedationrequests />}
          />
          <Route path="/home-lecturer/:lecturerId" element={<LDhome />} />
          <Route
            path="/home-lecturer-notifications"
            element={<Notifications />}
          />
          <Route path="/admin-dashboard" element={<Admindashboard />} />
          <Route path="/admin-signin" element={<AdminSignin />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
};

export default App;
