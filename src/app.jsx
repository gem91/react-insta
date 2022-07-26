import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Main from "./pages/main";
import NotFound from "./pages/NotFound";
import "./app.scss";
import PageSearch from "./pages/outlet/PageSearch";
import PagePeeds from "./pages/outlet/PagePeeds";
import PageLike from "./pages/outlet/PageLike";
import PageProfile from "./pages/outlet/PageProfile";

const App = () => {
   const [user, setUser] = useState(null);
   useEffect(() => {
      console.log(user);
   }, [user]);

   return (
      <div className="wrap">
         <Routes>
            <Route
               path="/"
               element={<Login user={user} setUser={setUser} />}
            ></Route>
            <Route element={<Main user={user} />}>
               <Route path="home" element={<PagePeeds />}></Route>
               <Route path="search" element={<PageSearch />}></Route>
               <Route path="like" element={<PageLike />}></Route>
               <Route path="profile" element={<PageProfile />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
         </Routes>
      </div>
   );
};

export default App;
