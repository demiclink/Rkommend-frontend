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

const App = () => {
  return (
    <main className="main-content">
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
      </Routes>
    </main>
  );
};

export default App;
