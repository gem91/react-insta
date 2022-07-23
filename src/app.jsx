import { React, useState, useEffect } from "react";
import Login from "./pages/login/login";
import Main from "./pages/main";

import "./app.scss";

const App = () => {
   const [user, setUser] = useState(null);
   useEffect(() => {
      console.log(user);
   }, [user]);

   return (
      <div className="wrap">
         {user === null && <Login setUser={setUser} />}
         {user !== null && <Main user={user} />}
      </div>
   );
};

export default App;
