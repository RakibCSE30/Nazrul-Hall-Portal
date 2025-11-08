// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// // import Students from './pages/Students';
// // import Dining from './pages/Dining';
// // import Gallery from './pages/Gallery';
// // import Login from './pages/Login';
// // import './App.css';

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   return (
// //     <div className={darkMode ? 'dark' : ''}>
// //       <Router>
// //         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// //         <div style={{ paddingTop: '70px' }}>
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/students" element={<Students />} />
// //             <Route path="/dining" element={<Dining />} />
// //             <Route path="/gallery" element={<Gallery />} />
// //             <Route path="/login" element={<Login />} />
// //           </Routes>
// //         </div>
// //       </Router>
// //     </div>
// //   );
// // }
// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Students from './pages/Students';
// import DiningTokenSystem from './pages/DiningTokenSystem';
// import Gallery from './pages/Gallery';
// import Login from './pages/Login';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   // 🎨 Theme setup
//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: {
//         main: darkMode ? '#2e7d32' : '#388e3c', // Green shades (Nazrul Hall theme)
//       },
//       secondary: {
//         main: '#fdd835', // Gold accent color
//       },
//       background: {
//         default: darkMode ? '#121212' : '#f5f5f5',
//         paper: darkMode ? '#1e1e1e' : '#ffffff',
//       },
//     },
//     typography: {
//       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline /> {/* ✅ ensures background and text follow the theme */}
//       <Router>
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <div style={{ paddingTop: '70px' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/students" element={<Students />} />
//             <Route path="/dining" element={<DiningTokenSystem />} />
//             {/* <Route path="/dining" element={<DiningTokenSystem />} /> */}
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Students from './pages/Students';
// import DiningTokenSystem from './DiningTokenSystem';  // ← FIXED
// import Gallery from './pages/Gallery';
// import Login from './pages/Login';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: { main: darkMode ? '#2e7d32' : '#388e3c' },
//       secondary: { main: '#fdd835' },
//       background: {
//         default: darkMode ? '#121212' : '#f5f5f5',
//         paper: darkMode ? '#1e1e1e' : '#ffffff',
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <div style={{ paddingTop: '70px' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/students" element={<Students />} />
//             <Route path="/dining" element={<DiningTokenSystem />} />  {/* ← Use correct name */}
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Students from './pages/Students';
// import DiningTokenSystem from './DiningTokenSystem';  // ← FIXED
// import Gallery from './pages/Gallery';
// import Login from './pages/Login';
// import './App.css';
// import Notification from './components/Notification'; // <- added

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: { main: darkMode ? '#2e7d32' : '#388e3c' },
//       secondary: { main: '#fdd835' },
//       background: {
//         default: darkMode ? '#121212' : '#f5f5f5',
//         paper: darkMode ? '#1e1e1e' : '#ffffff',
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {/* Wrap app with Notification provider. offsetTop should match navbar height (70px used here). */}
//       <Notification offsetTop="70px">
//         <Router>
//           <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//           <div style={{ paddingTop: '70px' }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/students" element={<Students />} />
//               <Route path="/dining" element={<DiningTokenSystem />} />  {/* ← Use correct name */}
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/login" element={<Login />} />
//             </Routes>
//           </div>
//         </Router>
//       </Notification>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Students from "./pages/Students";
import DiningTokenSystem from "./pages/DiningTokenSystem";
import Gallery from "./pages/Gallery";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import Teachers from "./pages/Teachers";
import TeacherGroup from "./pages/TeacherGroup";

import HallShangsod from "./pages/HallShangsod";
import HallMemberDetail from "./pages/HallMemberDetail";

import Staffs from "./pages/Staffs";
import StaffGroup from "./pages/StaffGroup";
import StaffMemberDetail from "./pages/StaffMemberDetail";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: darkMode ? "#2e7d32" : "#388e3c" },
      secondary: { main: "#fdd835" },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Notification offsetTop="70px">
        <AuthProvider>
          <Router>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Main content area; paddingTop should match Navbar height */}
            <div style={{ paddingTop: "70px", minHeight: "calc(100vh - 200px)" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/dining" element={<DiningTokenSystem />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                {/* Teachers */}
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/teachers/:group" element={<TeacherGroup />} />

                {/* Hall Shangsod */}
                <Route path="/hall-shangsod" element={<HallShangsod />} />
                <Route path="/hall-shangsod/:id" element={<HallMemberDetail />} />

                {/* Staffs */}
                <Route path="/staffs" element={<Staffs />} />
                <Route path="/staffs/:groupKey" element={<StaffGroup />} />
                <Route path="/staffs/member/:id" element={<StaffMemberDetail />} />

                {/* Add more routes here as you implement them */}
              </Routes>
            </div>

            {/* Footer shown on every page (below main content) */}
            <Footer />
          </Router>
        </AuthProvider>
      </Notification>
    </ThemeProvider>
  );
}

export default App;
