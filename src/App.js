import React from "react";
import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Login from "./Container/Login/Login";
// import Registration from "./Container/Registration/Registration";
import Shop from "../src/Container/Shop/Shop";
import ShopIItems from "./Container/Shop/ShopItems/ShopIItems";
import Forget from "./Container/Forget/Forget";
import ShoppingCardSinglepage from "./Container/Shop/ShoppingCardSinglePage/ShoppingCardSinglepage";
import Registration2 from "./Container/Registation2/Registration2";
const LazyShop = React.lazy(() => import("../src/Container/Shop/Shop"));
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/forgetpassword" element={<Forget />} />
        </Route>
        <Route
          path="/shop"
          element={
            <React.Suspense fallback="">
              <LazyShop />
            </React.Suspense>
          }
        >
          <Route
            path="singleshoppingcard"
            element={<ShoppingCardSinglepage />}
          />
          <Route index element={<ShopIItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
