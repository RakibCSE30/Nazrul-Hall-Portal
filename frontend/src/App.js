// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Students from './pages/Students';
// import Dining from './pages/Dining';
// import Gallery from './pages/Gallery';
// import Login from './pages/Login';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Router>
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <div style={{ paddingTop: '70px' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/students" element={<Students />} />
//             <Route path="/dining" element={<Dining />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }
// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import Dining from './pages/Dining';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🎨 Theme setup
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#2e7d32' : '#388e3c', // Green shades (Nazrul Hall theme)
      },
      secondary: {
        main: '#fdd835', // Gold accent color
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* ✅ ensures background and text follow the theme */}
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
