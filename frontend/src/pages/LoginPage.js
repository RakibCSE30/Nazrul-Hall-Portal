// // src/pages/LoginPage.js
// import React from 'react';
// import { Mail, Lock, Eye, EyeOff, Ticket } from 'lucide-react';

// const LoginPage = ({ formData, setFormData, showPassword, setShowPassword, handleLogin, handleKeyPress, setCurrentPage }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform hover:scale-105 transition-transform duration-300">
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
//             <Ticket className="text-white" size={40} />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">JU Dining Token</h1>
//           <p className="text-gray-600">Kazi Nazrul Islam Hall</p>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 onKeyPress={(e) => handleKeyPress(e, handleLogin)}
//                 className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 onKeyPress={(e) => handleKeyPress(e, handleLogin)}
//                 className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={handleLogin}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
//           >
//             Login
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <button
//               onClick={() => setCurrentPage('signup')}
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;













// import React from 'react';
// import { Mail, Lock, Eye, EyeOff, Ticket } from 'lucide-react';
// import { useNotification } from '../components/Notification';

// const LoginPage = ({ formData, setFormData, showPassword, setShowPassword, handleLogin, handleKeyPress, setCurrentPage }) => {
//   const { addNotification } = useNotification();

//   const onLoginClick = async () => {
//     // You can show a temporary info toast immediately
//     addNotification({ message: 'Logging in...', type: 'info', duration: 1200 });

//     // call the parent's login handler (which may do validation / API)
//     // If you want to show success/error based on result, update parent to return status
//     handleLogin();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform hover:scale-105 transition-transform duration-300">
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
//             <Ticket className="text-white" size={40} />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">JU Dining Token</h1>
//           <p className="text-gray-600">Kazi Nazrul Islam Hall</p>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 onKeyPress={(e) => handleKeyPress(e, handleLogin)}
//                 className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 onKeyPress={(e) => handleKeyPress(e, handleLogin)}
//                 className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={onLoginClick}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
//           >
//             Login
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <button
//               onClick={() => setCurrentPage('signup')}
//               className="text-purple-600 font-semibold hover:underline"
//             >
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotification();

  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await API.post('/auth/login', form);
      const { token, user } = res.data;
      login(token, user);
      addNotification({ message: 'Login successful', type: 'success' });
      // redirect if you want: useNavigate from react-router
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      addNotification({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 100 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>লগইন করুন</Typography>
        <TextField label="Email" fullWidth margin="normal" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        <Button variant="contained" color="primary" fullWidth onClick={submit} disabled={loading} style={{ marginTop: 16 }}>
          {loading ? 'Logging...' : 'লগইন'}
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;