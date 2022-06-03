import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Registration from "./Container/Registration/Registration";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />.
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
