// // src/pages/SignupPage.js
// import React from 'react';
// import { User, Eye, EyeOff } from 'lucide-react';

// const SignupPage = ({ formData, setFormData, showPassword, setShowPassword, handleSignup, setCurrentPage }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-green-500 to-teal-500 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
//             <User className="text-white" size={40} />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
//           <p className="text-gray-600">Join JNU Dining System</p>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Student ID</label>
//             <input
//               type="text"
//               value={formData.studentId}
//               onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your student ID"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
//             <input
//               type="tel"
//               value={formData.mobile}
//               onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your mobile number"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="w-full px-4 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//                 placeholder="Create a strong password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Password must be 8+ characters with uppercase, lowercase, number, and special character
//             </p>
//           </div>

//           <button
//             onClick={handleSignup}
//             className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
//           >
//             Sign Up
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <button
//               onClick={() => setCurrentPage('login')}
//               className="text-teal-600 font-semibold hover:underline"
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;













// import React from 'react';
// import { User, Eye, EyeOff } from 'lucide-react';
// import { useNotification } from '../components/Notification';

// const SignupPage = ({ formData, setFormData, showPassword, setShowPassword, handleSignup, setCurrentPage }) => {
//   const { addNotification } = useNotification();

//   const onSignupClick = async () => {
//     addNotification({ message: 'Creating account...', type: 'info', duration: 1200 });
//     // If parent handleSignup returns result, you can show success/error based on that.
//     handleSignup();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-green-500 to-teal-500 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4">
//             <User className="text-white" size={40} />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
//           <p className="text-gray-600">Join JNU Dining System</p>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Student ID</label>
//             <input
//               type="text"
//               value={formData.studentId}
//               onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your student ID"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
//             <input
//               type="tel"
//               value={formData.mobile}
//               onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your mobile number"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="w-full px-4 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
//                 placeholder="Create a strong password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Password must be 8+ characters with uppercase, lowercase, number, and special character
//             </p>
//           </div>

//           <button
//             onClick={onSignupClick}
//             className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
//           >
//             Sign Up
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <button
//               onClick={() => setCurrentPage('login')}
//               className="text-teal-600 font-semibold hover:underline"
//             >
//               Login
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

const SignupPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotification();
  const [form, setForm] = useState({ name: '', email: '', password: '', studentId: '', mobile: '' });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await API.post('/auth/signup', form);
      const { token, user } = res.data;
      login(token, user);
      addNotification({ message: 'Account created', type: 'success' });
    } catch (err) {
      const msg = err.response?.data?.message || 'Signup failed';
      addNotification({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 100 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>রেজিস্টার</Typography>
        <TextField label="Name" fullWidth margin="normal" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        <TextField label="Student ID" fullWidth margin="normal" value={form.studentId} onChange={(e) => setForm({...form, studentId: e.target.value})} />
        <TextField label="Mobile" fullWidth margin="normal" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} />
        <TextField label="Email" fullWidth margin="normal" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        <Button variant="contained" color="primary" fullWidth onClick={submit} disabled={loading} style={{ marginTop: 16 }}>
          {loading ? 'Creating...' : 'রেজিস্টার'}
        </Button>
      </Box>
    </Container>
  );
};

export default SignupPage;