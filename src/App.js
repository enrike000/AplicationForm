import "./index.css";
import MainPage from "./pages/main page/main";
import PersonalInfo from "./pages/aplication form/personalinfo/personalinfo";
import Techskill from "./pages/aplication form/technicalskill/techskill";
import CovidPg from "./pages/aplication form/covid pg/covidpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
          <Route path="personalinfo" element={<PersonalInfo />}></Route>
          <Route path="TechSkill" element={<Techskill />}></Route>
          <Route path="covidpg" element={<CovidPg />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
