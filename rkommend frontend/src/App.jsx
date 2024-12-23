import "./css files/landingPage.css";
import Home from "./pages/Home";
import AccountType from "./pages/accountType";
import { Routes, Route } from "react-router-dom";
import Studentaccountcreation from "./pages/studentaccountcreation";
import Lectureraccountcreation from "./pages/lectureraccountcreation";
import Signintype from "./pages/signinType";

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
      </Routes>
    </main>
  );
};

export default App;
