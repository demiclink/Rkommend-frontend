import "./css files/landingPage.css";
import Home from "./pages/Home";
import AccountType from "./pages/accountType";
import { Routes, Route } from "react-router-dom";
import Studentaccountcreation from "./pages/studentaccountcreation";

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
      </Routes>
    </main>
  );
};

export default App;
