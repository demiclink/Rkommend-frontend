import "./css files/landingPage.css";
import Home from "./pages/Home";
import AccountType from "./pages/accountType";
import { Routes, Route } from "react-router-dom";
import Studentaccountcreation from "./pages/studentaccountcreation";
import Lectureraccountcreation from "./pages/lectureraccountcreation";

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
      </Routes>
    </main>
  );
};

export default App;
