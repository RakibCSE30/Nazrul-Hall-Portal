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



// import React, { useState, useContext } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import API from '../services/api';
// import { AuthContext } from '../contexts/AuthContext';
// import { useNotification } from '../components/Notification';

// const SignupPage = () => {
//   const { login } = useContext(AuthContext);
//   const { addNotification } = useNotification();
//   const [form, setForm] = useState({ name: '', email: '', password: '', studentId: '', mobile: '' });
//   const [loading, setLoading] = useState(false);

//   const submit = async () => {
//     setLoading(true);
//     try {
//       const res = await API.post('/auth/signup', form);
//       const { token, user } = res.data;
//       login(token, user);
//       addNotification({ message: 'Account created', type: 'success' });
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Signup failed';
//       addNotification({ message: msg, type: 'error' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box textAlign="center">
//         <Typography variant="h4" gutterBottom>রেজিস্টার</Typography>
//         <TextField label="Name" fullWidth margin="normal" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
//         <TextField label="Student ID" fullWidth margin="normal" value={form.studentId} onChange={(e) => setForm({...form, studentId: e.target.value})} />
//         <TextField label="Mobile" fullWidth margin="normal" value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} />
//         <TextField label="Email" fullWidth margin="normal" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
//         <TextField label="Password" type="password" fullWidth margin="normal" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
//         <Button variant="contained" color="primary" fullWidth onClick={submit} disabled={loading} style={{ marginTop: 16 }}>
//           {loading ? 'Creating...' : 'রেজিস্টার'}
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default SignupPage;



import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Person, Phone, Mail } from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

const SignupPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    studentId: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!form.studentId.trim()) return 'Please enter your Student ID';
    if (!form.email.trim()) return 'Please enter your email';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email';
    if (!form.password || form.password.length < 8) return 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword) return 'Passwords do not match';
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      addNotification({ message: err, type: 'error' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await API.post('/auth/signup', {
        name: form.name,
        studentId: form.studentId,
        mobile: form.mobile,
        email: form.email,
        password: form.password,
      });

      const { token, user } = res.data;
      if (token && user) {
        login(token, user);
        addNotification({ message: 'Account created — logged in', type: 'success' });
        navigate('/dining'); // redirect after signup (adjust as desired)
      } else {
        addNotification({ message: 'Signup succeeded but no token returned', type: 'info' });
      }
    } catch (e) {
      const msg = e.response?.data?.message || 'Signup failed';
      addNotification({ message: msg, type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign up with your student details to collect dining tokens.
          </Typography>
        </Box>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Student ID"
          fullWidth
          margin="normal"
          value={form.studentId}
          onChange={(e) => update('studentId', e.target.value)}
        />

        <TextField
          label="Mobile"
          fullWidth
          margin="normal"
          value={form.mobile}
          onChange={(e) => update('mobile', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => update('password', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" aria-label="toggle password">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          helperText="Minimum 8 characters"
        />

        <TextField
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={form.confirmPassword}
          onChange={(e) => update('confirmPassword', e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? 'Creating...' : 'Create Account'}
        </Button>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Button component={RouterLink} to="/login" variant="text" size="small">
              Sign in
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;