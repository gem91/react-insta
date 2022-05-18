import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Login from './pages/login/login';
import Main from './pages/main/main';

import PagePeeds from './pages/page-peeds/page-peeds';
import PageLike from './pages/page-like/page-like';
import PageSearch from './pages/page-search/page-search';
import PageProfile from './pages/page-profile/page-profile';


import './app.css';

const App = () => {
    return(
        <div className='wrap'>
           <Routes>
                {/* <Route path="/" element={<Login />}></Route> */}
                <Route path="/" element={<Main />}>
                    <Route path="/home" element={<PagePeeds />}></Route>
                    <Route path="/search" element={<PageSearch />}></Route>
                    <Route path="/like" element={<PageLike />}></Route>
                    <Route path="/profile" element={<PageProfile />}></Route>
                </Route>
            </Routes>
        </div>
    )
};

export default App;


// import { Route, Routes, Outlet } from 'react-router-dom';
// import React from 'react';


// import './app.css';

// function Dashboard() {
//     return (
//       <div>
//         <h1>Dashboard</h1>
  
//         {/* This element will render either <DashboardMessages> when the URL is
//             "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
//         */}
//         <Outlet />
//       </div>
//     );
//   }
  
//   function App() {
//     return (
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route
//             path="messages"
//             element={ <h1>message</h1>}
//           />
//           <Route path="tasks" element={
//               <h1>tasks</h1>
//           } />
//         </Route>
//       </Routes>
//     );
//   }
// export default App;