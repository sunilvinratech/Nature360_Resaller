import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Container/Login/Login";
import Registration from "./Container/Registation2/Registration2";
import ShopIItems from "./Container/Shop/ShopItems/ShopIItems";
import Forget from "./Container/Forget/Forget";
import ShoppingCardSinglepage from "./Container/Shop/ShoppingCardSinglePage/ShoppingCardSinglepage";
import Verify from "./Container/Registation2/Verifypassword/Verify";
import Shop from "../src/Container/Shop/Shop";
// const LazyShop = React.lazy(() => import("../src/Container/Shop/Shop"));
function App() {
  var token = localStorage.getItem("token");
  const Navigate = useNavigate();

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgetpassword" element={<Forget />} />
        </Route>
        <Route path="/shop" element={<Shop />}>
          <Route
            path="singleshoppingcard"
            element={<ShoppingCardSinglepage />}
          />
          <Route index element={<ShopIItems />} />
        </Route>
        <Route path="/varify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
