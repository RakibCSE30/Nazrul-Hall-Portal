// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Button, Alert } from '@mui/material';

// const Dining = () => {
//   const [time, setTime] = useState(new Date());
//   const [canCollect, setCanCollect] = useState(false);
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     const t = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(t);
//   }, []);

//   useEffect(() => {
//     const h = time.getHours();
//     setCanCollect(h >= 20 && h < 22);
//   }, [time]);

//   const collect = () => setMsg('টোকেন কালেক্ট! ID: ' + Math.random().toString(36).substr(2, 5));

//   return (
//     <Container style={{ textAlign: 'center', marginTop: '100px' }}>
//       <Typography variant="h4">ডাইনিং টোকেন</Typography>
//       <Typography variant="h6">সময়: {time.toLocaleTimeString('bn-BD')}</Typography>
//       {!canCollect ? 
//         <Alert severity="warning">৮টা-১০টা পর্যন্ত কালেক্ট করা যায়</Alert> : 
//         <Alert severity="success">এখন কালেক্ট করুন!</Alert>
//       }
//       <br />
//       <Button variant="contained" color="success" size="large" onClick={collect} disabled={!canCollect}>
//         কালেক্ট করুন
//       </Button>
//       {msg && <Alert severity="info" style={{ marginTop: '20px' }}>{msg}</Alert>}
//     </Container>
//   );
// };

// export default Dining;


// the Daining system -2








// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, CreditCard, CheckCircle, XCircle, User, Mail, Lock, Eye, EyeOff, LogOut, Ticket, AlertCircle } from 'lucide-react';

// const DiningTokenSystem = () => {
//   const [currentPage, setCurrentPage] = useState('login');
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     studentId: '',
//     mobile: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [tokens, setTokens] = useState([]);
//   const [tokenCount, setTokenCount] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [isTimeValid, setIsTimeValid] = useState(false);

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await window.storage.get('current_user');
//         if (userData) {
//           setUser(JSON.parse(userData.value));
//           setCurrentPage('dashboard');
//           loadTokens(JSON.parse(userData.value).email);
//         }
//       } catch (error) {
//         console.log('No active session');
//       }
//     };
//     loadUserData();
//     checkTime();
//     const interval = setInterval(checkTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const checkTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     setIsTimeValid(hours >= 20 && hours < 22);
//   };

//   const loadTokens = async (email) => {
//     try {
//       const result = await window.storage.get(`tokens_${email}`);
//       if (result) {
//         setTokens(JSON.parse(result.value));
//       }
//     } catch (error) {
//       setTokens([]);
//     }
//   };

//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const validatePassword = (password) => {
//     const minLength = password.length >= 8;
//     const hasUpper = /[A-Z]/.test(password);
//     const hasLower = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*]/.test(password);
//     return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
//   };

//   const handleSignup = async () => {
//     if (!validatePassword(formData.password)) {
//       showNotification('Password must be at least 8 characters with uppercase, lowercase, number, and special character', 'error');
//       return;
//     }

//     try {
//       const existingUser = await window.storage.get(`user_${formData.email}`);
//       if (existingUser) {
//         showNotification('Email already registered', 'error');
//         return;
//       }

//       const userData = {
//         email: formData.email,
//         name: formData.name,
//         studentId: formData.studentId,
//         mobile: formData.mobile,
//         password: formData.password
//       };

//       await window.storage.set(`user_${formData.email}`, JSON.stringify(userData));
//       showNotification('Registration successful! Please login.');
//       setCurrentPage('login');
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Registration failed. Please try again.', 'error');
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const result = await window.storage.get(`user_${formData.email}`);
//       if (!result) {
//         showNotification('Invalid email or password', 'error');
//         return;
//       }

//       const userData = JSON.parse(result.value);
//       if (userData.password !== formData.password) {
//         showNotification('Invalid email or password', 'error');
//         return;
//       }

//       setUser(userData);
//       await window.storage.set('current_user', JSON.stringify(userData));
//       loadTokens(userData.email);
//       setCurrentPage('dashboard');
//       showNotification(`Welcome back, ${userData.name}!`);
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Login failed. Please try again.', 'error');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await window.storage.delete('current_user');
//       setUser(null);
//       setTokens([]);
//       setCurrentPage('login');
//       showNotification('Logged out successfully');
//     } catch (error) {
//       showNotification('Logout failed', 'error');
//     }
//   };

//   const handleCollectToken = async () => {
//     if (!isTimeValid) {
//       showNotification('Tokens can only be collected between 8 PM and 10 PM', 'error');
//       return;
//     }

//     if (!paymentMethod) {
//       showNotification('Please select a payment method', 'error');
//       return;
//     }

//     const newTokens = [];
//     const now = new Date();
//     const baseId = Date.now();

//     for (let i = 0; i < tokenCount; i++) {
//       newTokens.push({
//         id: `${baseId}_${i}`,
//         date: now.toLocaleDateString(),
//         time: now.toLocaleTimeString(),
//         paymentMethod: paymentMethod,
//         status: 'active',
//         amount: 50
//       });
//     }

//     const updatedTokens = [...tokens, ...newTokens];
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification(`Successfully collected ${tokenCount} token(s) via ${paymentMethod.toUpperCase()}`);
//       setTokenCount(1);
//       setPaymentMethod('');
//     } catch (error) {
//       showNotification('Failed to save tokens', 'error');
//     }
//   };

//   const handleCancelToken = async (tokenId) => {
//     const updatedTokens = tokens.map(token =>
//       token.id === tokenId ? { ...token, status: 'cancelled' } : token
//     );
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification('Token cancelled successfully');
//     } catch (error) {
//       showNotification('Failed to cancel token', 'error');
//     }
//   };

//   const handleKeyPress = (e, action) => {
//     if (e.key === 'Enter') {
//       action();
//     }
//   };

//   const LoginPage = () => (
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

//   const SignupPage = () => (
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

//   const Dashboard = () => (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.name}!</h1>
//               <p className="text-gray-600">Student ID: {user.studentId}</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"
//             >
//               <LogOut size={20} />
//               Logout
//             </button>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-3xl shadow-2xl p-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Ticket className="text-purple-600" />
//               Collect Token
//             </h2>

//             {!isTimeValid && (
//               <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg flex items-start gap-3">
//                 <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
//                 <div>
//                   <p className="font-semibold text-yellow-800">Token Collection Closed</p>
//                   <p className="text-yellow-700 text-sm">Tokens can only be collected between 8:00 PM - 10:00 PM</p>
//                 </div>
//               </div>
//             )}

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Number of Tokens</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max="5"
//                   value={tokenCount}
//                   onChange={(e) => setTokenCount(parseInt(e.target.value) || 1)}
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
//                   disabled={!isTimeValid}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-3">Payment Method</label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setPaymentMethod('bkash')}
//                     disabled={!isTimeValid}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       paymentMethod === 'bkash'
//                         ? 'border-pink-500 bg-pink-50'
//                         : 'border-gray-300 hover:border-pink-300'
//                     } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <div className="text-center">
//                       <div className="bg-pink-500 text-white font-bold text-xl py-2 rounded-lg mb-2">bKash</div>
//                       <p className="text-sm text-gray-600">Mobile Payment</p>
//                     </div>
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setPaymentMethod('nagad')}
//                     disabled={!isTimeValid}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       paymentMethod === 'nagad'
//                         ? 'border-orange-500 bg-orange-50'
//                         : 'border-gray-300 hover:border-orange-300'
//                     } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <div className="text-center">
//                       <div className="bg-orange-500 text-white font-bold text-xl py-2 rounded-lg mb-2">Nagad</div>
//                       <p className="text-sm text-gray-600">Digital Payment</p>
//                     </div>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-700">Token Price:</span>
//                   <span className="font-semibold">৳50 each</span>
//                 </div>
//                 <div className="flex justify-between items-center text-lg font-bold">
//                   <span className="text-gray-800">Total Amount:</span>
//                   <span className="text-purple-600">৳{tokenCount * 50}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleCollectToken}
//                 disabled={!isTimeValid || !paymentMethod}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 Collect Token
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-2xl p-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Calendar className="text-indigo-600" />
//               My Tokens
//             </h2>

//             {tokens.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 <Ticket size={64} className="mx-auto mb-4 opacity-30" />
//                 <p>No tokens collected yet</p>
//               </div>
//             ) : (
//               <div className="space-y-4 max-h-96 overflow-y-auto">
//                 {tokens.map((token) => (
//                   <div
//                     key={token.id}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       token.status === 'active'
//                         ? 'border-green-300 bg-green-50'
//                         : 'border-red-300 bg-red-50'
//                     }`}
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <div className="flex items-center gap-2 mb-1">
//                           {token.status === 'active' ? (
//                             <CheckCircle className="text-green-600" size={20} />
//                           ) : (
//                             <XCircle className="text-red-600" size={20} />
//                           )}
//                           <span className="font-semibold text-gray-800 capitalize">
//                             {token.status}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600">Token ID: {token.id}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-lg text-gray-800">৳{token.amount}</p>
//                         <p className="text-xs text-gray-500 uppercase">{token.paymentMethod}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={16} />
//                         {token.date}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock size={16} />
//                         {token.time}
//                       </div>
//                     </div>
//                     {token.status === 'active' && (
//                       <button
//                         onClick={() => handleCancelToken(token.id)}
//                         className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
//                       >
//                         Cancel Token
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="relative">
//       {notification && (
//         <div className="fixed top-4 right-4 z-50 animate-fade-in">
//           <div
//             className={`px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${
//               notification.type === 'success'
//                 ? 'bg-green-500 text-white'
//                 : 'bg-red-500 text-white'
//             }`}
//           >
//             {notification.type === 'success' ? (
//               <CheckCircle size={24} />
//             ) : (
//               <AlertCircle size={24} />
//             )}
//             <p className="font-semibold">{notification.message}</p>
//           </div>
//         </div>
//       )}

//       {currentPage === 'login' && <LoginPage />}
//       {currentPage === 'signup' && <SignupPage />}
//       {currentPage === 'dashboard' && user && <Dashboard />}
//     </div>
//   );
// };

// export default DiningTokenSystem;



// the 3






// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, CreditCard, CheckCircle, XCircle, User, Mail, Lock, Eye, EyeOff, LogOut, Ticket, AlertCircle } from 'lucide-react';

// const DiningTokenSystem = () => {
//   const [currentPage, setCurrentPage] = useState('login');
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     studentId: '',
//     mobile: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [tokens, setTokens] = useState([]);
//   const [tokenCount, setTokenCount] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [isTimeValid, setIsTimeValid] = useState(false);

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await window.storage.get('current_user');
//         if (userData) {
//           const parsedUser = JSON.parse(userData.value);
//           setUser(parsedUser);
//           setCurrentPage('dashboard');
//           loadTokens(parsedUser.email);
//         }
//       } catch (error) {
//         console.log('No active session');
//       }
//     };
//     loadUserData();
//     checkTime();
//     const interval = setInterval(checkTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const checkTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     setIsTimeValid(hours >= 20 && hours < 22);
//   };

//   const loadTokens = async (email) => {
//     try {
//       const result = await window.storage.get(`tokens_${email}`);
//       if (result) {
//         setTokens(JSON.parse(result.value));
//       }
//     } catch (error) {
//       setTokens([]);
//     }
//   };

//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePassword = (password) => {
//     const minLength = password.length >= 8;
//     const hasUpper = /[A-Z]/.test(password);
//     const hasLower = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*]/.test(password);
//     return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
//   };

//   const handleSignup = async () => {
//     // Validate all fields
//     if (!formData.name.trim()) {
//       showNotification('Please provide your full name', 'error');
//       return;
//     }
//     if (!formData.studentId.trim()) {
//       showNotification('Please provide your student ID', 'error');
//       return;
//     }
//     if (!formData.mobile.trim() || !/^\d{10,}$/.test(formData.mobile)) {
//       showNotification('Please provide a valid mobile number (10+ digits)', 'error');
//       return;
//     }
//     if (!formData.email || !validateEmail(formData.email)) {
//       showNotification('Please provide a valid email address', 'error');
//       return;
//     }
//     if (!formData.password || !validatePassword(formData.password)) {
//       showNotification(
//         'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
//         'error'
//       );
//       return;
//     }

//     try {
//       const existingUser = await window.storage.get(`user_${formData.email}`);
//       if (existingUser) {
//         showNotification('Email already registered', 'error');
//         return;
//       }

//       const userData = {
//         email: formData.email,
//         name: formData.name,
//         studentId: formData.studentId,
//         mobile: formData.mobile,
//         password: formData.password
//       };

//       await window.storage.set(`user_${formData.email}`, JSON.stringify(userData));
//       showNotification('Registration successful! Please login.', 'success');
//       setCurrentPage('login');
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Registration failed. Please try again.', 'error');
//     }
//   };

//   const handleLogin = async () => {
//     // Validate email first
//     if (!formData.email || !validateEmail(formData.email)) {
//       showNotification('Please provide a valid email address', 'error');
//       return;
//     }

//     try {
//       const result = await window.storage.get(`user_${formData.email}`);
//       if (!result) {
//         showNotification('Email not registered', 'error');
//         return;
//       }

//       const userData = JSON.parse(result.value);
//       if (!formData.password) {
//         showNotification('Please provide a password', 'error');
//         return;
//       }
//       if (userData.password !== formData.password) {
//         showNotification('Incorrect password', 'error');
//         return;
//       }

//       setUser(userData);
//       await window.storage.set('current_user', JSON.stringify(userData));
//       loadTokens(userData.email);
//       setCurrentPage('dashboard');
//       showNotification(`Welcome back, ${userData.name}!`, 'success');
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Login failed. Please try again.', 'error');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await window.storage.delete('current_user');
//       setUser(null);
//       setTokens([]);
//       setCurrentPage('login');
//       showNotification('Logged out successfully', 'success');
//     } catch (error) {
//       showNotification('Logout failed', 'error');
//     }
//   };

//   const handleCollectToken = async () => {
//     if (!isTimeValid) {
//       showNotification('Tokens can only be collected between 8 PM and 10 PM', 'error');
//       return;
//     }

//     if (!paymentMethod) {
//       showNotification('Please select a payment method', 'error');
//       return;
//     }

//     const newTokens = [];
//     const now = new Date();
//     const baseId = Date.now();

//     for (let i = 0; i < tokenCount; i++) {
//       newTokens.push({
//         id: `${baseId}_${i}`,
//         date: now.toLocaleDateString(),
//         time: now.toLocaleTimeString(),
//         paymentMethod: paymentMethod,
//         status: 'active',
//         amount: 50
//       });
//     }

//     const updatedTokens = [...tokens, ...newTokens];
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification(`Successfully collected ${tokenCount} token(s) via ${paymentMethod.toUpperCase()}`, 'success');
//       setTokenCount(1);
//       setPaymentMethod('');
//     } catch (error) {
//       showNotification('Failed to save tokens', 'error');
//     }
//   };

//   const handleCancelToken = async (tokenId) => {
//     const updatedTokens = tokens.map(token =>
//       token.id === tokenId ? { ...token, status: 'cancelled' } : token
//     );
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification('Token cancelled successfully', 'success');
//     } catch (error) {
//       showNotification('Failed to cancel token', 'error');
//     }
//   };

//   const handleKeyPress = (e, action) => {
//     if (e.key === 'Enter') {
//       action();
//     }
//   };

//   const LoginPage = () => (
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

//   const SignupPage = () => (
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

//   const Dashboard = () => (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.name}!</h1>
//               <p className="text-gray-600">Student ID: {user.studentId}</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"
//             >
//               <LogOut size={20} />
//               Logout
//             </button>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-3xl shadow-2xl p-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Ticket className="text-purple-600" />
//               Collect Token
//             </h2>

//             {!isTimeValid && (
//               <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg flex items-start gap-3">
//                 <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
//                 <div>
//                   <p className="font-semibold text-yellow-800">Token Collection Closed</p>
//                   <p className="text-yellow-700 text-sm">Tokens can only be collected between 8:00 PM - 10:00 PM</p>
//                 </div>
//               </div>
//             )}

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">Number of Tokens</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max="5"
//                   value={tokenCount}
//                   onChange={(e) => setTokenCount(parseInt(e.target.value) || 1)}
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none"
//                   disabled={!isTimeValid}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-3">Payment Method</label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setPaymentMethod('bkash')}
//                     disabled={!isTimeValid}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       paymentMethod === 'bkash'
//                         ? 'border-pink-500 bg-pink-50'
//                         : 'border-gray-300 hover:border-pink-300'
//                     } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <div className="text-center">
//                       <div className="bg-pink-500 text-white font-bold text-xl py-2 rounded-lg mb-2">bKash</div>
//                       <p className="text-sm text-gray-600">Mobile Payment</p>
//                     </div>
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setPaymentMethod('nagad')}
//                     disabled={!isTimeValid}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       paymentMethod === 'nagad'
//                         ? 'border-orange-500 bg-orange-50'
//                         : 'border-gray-300 hover:border-orange-300'
//                     } ${!isTimeValid ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     <div className="text-center">
//                       <div className="bg-orange-500 text-white font-bold text-xl py-2 rounded-lg mb-2">Nagad</div>
//                       <p className="text-sm text-gray-600">Digital Payment</p>
//                     </div>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-xl">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-700">Token Price:</span>
//                   <span className="font-semibold">৳50 each</span>
//                 </div>
//                 <div className="flex justify-between items-center text-lg font-bold">
//                   <span className="text-gray-800">Total Amount:</span>
//                   <span className="text-purple-600">৳{tokenCount * 50}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleCollectToken}
//                 disabled={!isTimeValid || !paymentMethod}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 Collect Token
//               </button>
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl shadow-2xl p-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//               <Calendar className="text-indigo-600" />
//               My Tokens
//             </h2>

//             {tokens.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 <Ticket size={64} className="mx-auto mb-4 opacity-30" />
//                 <p>No tokens collected yet</p>
//               </div>
//             ) : (
//               <div className="space-y-4 max-h-96 overflow-y-auto">
//                 {tokens.map((token) => (
//                   <div
//                     key={token.id}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       token.status === 'active'
//                         ? 'border-green-300 bg-green-50'
//                         : 'border-red-300 bg-red-50'
//                     }`}
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <div className="flex items-center gap-2 mb-1">
//                           {token.status === 'active' ? (
//                             <CheckCircle className="text-green-600" size={20} />
//                           ) : (
//                             <XCircle className="text-red-600" size={20} />
//                           )}
//                           <span className="font-semibold text-gray-800 capitalize">
//                             {token.status}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600">Token ID: {token.id}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-lg text-gray-800">৳{token.amount}</p>
//                         <p className="text-xs text-gray-500 uppercase">{token.paymentMethod}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={16} />
//                         {token.date}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock size={16} />
//                         {token.time}
//                       </div>
//                     </div>
//                     {token.status === 'active' && (
//                       <button
//                         onClick={() => handleCancelToken(token.id)}
//                         className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
//                       >
//                         Cancel Token
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="relative">
//       {notification && (
//         <div className="fixed top-4 right-4 z-50 animate-fade-in">
//           <div
//             className={`px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${
//               notification.type === 'success'
//                 ? 'bg-green-500 text-white'
//                 : 'bg-red-500 text-white'
//             }`}
//           >
//             {notification.type === 'success' ? (
//               <CheckCircle size={24} />
//             ) : (
//               <AlertCircle size={24} />
//             )}
//             <p className="font-semibold">{notification.message}</p>
//           </div>
//         </div>
//       )}

//       {currentPage === 'login' && <LoginPage />}
//       {currentPage === 'signup' && <SignupPage />}
//       {currentPage === 'dashboard' && user && <Dashboard />}
//     </div>
//   );
// };

// export default DiningTokenSystem;




// 4444
// src/DiningTokenSystem.js














// import React, { useState, useEffect } from 'react';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';
// import DashboardPage from './DashboardPage';
// import Notification from '../components/Notification';

// const DiningTokenSystem = () => {
//   const [currentPage, setCurrentPage] = useState('login');
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     studentId: '',
//     mobile: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [tokens, setTokens] = useState([]);
//   const [tokenCount, setTokenCount] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [isTimeValid, setIsTimeValid] = useState(false);

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await window.storage.get('current_user');
//         if (userData) {
//           const parsedUser = JSON.parse(userData.value);
//           setUser(parsedUser);
//           setCurrentPage('dashboard');
//           loadTokens(parsedUser.email);
//         }
//       } catch (error) {
//         console.log('No active session');
//       }
//     };
//     loadUserData();
//     checkTime();
//     const interval = setInterval(checkTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const checkTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     setIsTimeValid(hours >= 20 && hours < 22);
//   };

//   const loadTokens = async (email) => {
//     try {
//       const result = await window.storage.get(`tokens_${email}`);
//       if (result) {
//         setTokens(JSON.parse(result.value));
//       }
//     } catch (error) {
//       setTokens([]);
//     }
//   };

//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePassword = (password) => {
//     const minLength = password.length >= 8;
//     const hasUpper = /[A-Z]/.test(password);
//     const hasLower = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*]/.test(password);
//     return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
//   };

//   const handleSignup = async () => {
//     if (!formData.name.trim()) {
//       showNotification('Please provide your full name', 'error');
//       return;
//     }
//     if (!formData.studentId.trim()) {
//       showNotification('Please provide your student ID', 'error');
//       return;
//     }
//     if (!formData.mobile.trim() || !/^\d{10,}$/.test(formData.mobile)) {
//       showNotification('Please provide a valid mobile number (10+ digits)', 'error');
//       return;
//     }
//     if (!formData.email || !validateEmail(formData.email)) {
//       showNotification('Please provide a valid email address', 'error');
//       return;
//     }
//     if (!formData.password || !validatePassword(formData.password)) {
//       showNotification(
//         'Password must be 8+ characters with uppercase, lowercase, number, and special character',
//         'error'
//       );
//       return;
//     }

//     try {
//       const existingUser = await window.storage.get(`user_${formData.email}`);
//       if (existingUser) {
//         showNotification('Email already registered', 'error');
//         return;
//       }

//       const userData = {
//         email: formData.email,
//         name: formData.name,
//         studentId: formData.studentId,
//         mobile: formData.mobile,
//         password: formData.password
//       };

//       await window.storage.set(`user_${formData.email}`, JSON.stringify(userData));
//       showNotification('Registration successful! Please login.', 'success');
//       setCurrentPage('login');
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Registration failed. Please try again.', 'error');
//     }
//   };

//   const handleLogin = async () => {
//     if (!formData.email || !validateEmail(formData.email)) {
//       showNotification('Please provide a valid email address', 'error');
//       return;
//     }

//     try {
//       const result = await window.storage.get(`user_${formData.email}`);
//       if (!result) {
//         showNotification('Email not registered', 'error');
//         return;
//       }

//       const userData = JSON.parse(result.value);
//       if (!formData.password) {
//         showNotification('Please provide a password', 'error');
//         return;
//       }
//       if (userData.password !== formData.password) {
//         showNotification('Incorrect password', 'error');
//         return;
//       }

//       setUser(userData);
//       await window.storage.set('current_user', JSON.stringify(userData));
//       loadTokens(userData.email);
//       setCurrentPage('dashboard');
//       showNotification(`Welcome back, ${userData.name}!`, 'success');
//       setFormData({ email: '', password: '', name: '', studentId: '', mobile: '' });
//     } catch (error) {
//       showNotification('Login failed. Please try again.', 'error');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await window.storage.delete('current_user');
//       setUser(null);
//       setTokens([]);
//       setCurrentPage('login');
//       showNotification('Logged out successfully', 'success');
//     } catch (error) {
//       showNotification('Logout failed', 'error');
//     }
//   };

//   const handleCollectToken = async () => {
//     if (!isTimeValid) {
//       showNotification('Tokens can only be collected between 8 PM and 10 PM', 'error');
//       return;
//     }

//     if (!paymentMethod) {
//       showNotification('Please select a payment method', 'error');
//       return;
//     }

//     const newTokens = [];
//     const now = new Date();
//     const baseId = Date.now();

//     for (let i = 0; i < tokenCount; i++) {
//       newTokens.push({
//         id: `${baseId}_${i}`,
//         date: now.toLocaleDateString(),
//         time: now.toLocaleTimeString(),
//         paymentMethod: paymentMethod,
//         status: 'active',
//         amount: 50
//       });
//     }

//     const updatedTokens = [...tokens, ...newTokens];
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification(`Successfully collected ${tokenCount} token(s) via ${paymentMethod.toUpperCase()}`, 'success');
//       setTokenCount(1);
//       setPaymentMethod('');
//     } catch (error) {
//       showNotification('Failed to save tokens', 'error');
//     }
//   };

//   const handleCancelToken = async (tokenId) => {
//     const updatedTokens = tokens.map(token =>
//       token.id === tokenId ? { ...token, status: 'cancelled' } : token
//     );
//     setTokens(updatedTokens);

//     try {
//       await window.storage.set(`tokens_${user.email}`, JSON.stringify(updatedTokens));
//       showNotification('Token cancelled successfully', 'success');
//     } catch (error) {
//       showNotification('Failed to cancel token', 'error');
//     }
//   };

//   const handleKeyPress = (e, action) => {
//     if (e.key === 'Enter') {
//       action();
//     }
//   };

//   return (
//     <div className="relative">
//       {notification && (
//         <Notification
//           message={notification.message}
//           type={notification.type}
//         />
//       )}
//       {currentPage === 'login' && (
//         <LoginPage
//           formData={formData}
//           setFormData={setFormData}
//           showPassword={showPassword}
//           setShowPassword={setShowPassword}
//           handleLogin={handleLogin}
//           handleKeyPress={handleKeyPress}
//           setCurrentPage={setCurrentPage}
//         />
//       )}
//       {currentPage === 'signup' && (
//         <SignupPage
//           formData={formData}
//           setFormData={setFormData}
//           showPassword={showPassword}
//           setShowPassword={setShowPassword}
//           handleSignup={handleSignup}
//           setCurrentPage={setCurrentPage}
//         />
//       )}
//       {currentPage === 'dashboard' && user && (
//         <DashboardPage
//           user={user}
//           tokens={tokens}
//           tokenCount={tokenCount}
//           setTokenCount={setTokenCount}
//           paymentMethod={paymentMethod}
//           setPaymentMethod={setPaymentMethod}
//           isTimeValid={isTimeValid}
//           handleCollectToken={handleCollectToken}
//           handleCancelToken={handleCancelToken}
//           handleLogout={handleLogout}
//         />
//       )}
//     </div>
//   );
// };

// export default DiningTokenSystem;








import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

const TOKEN_PRICE = 50;

const DiningTokenSystem = () => {
  const { user } = useContext(AuthContext);
  const { addNotification } = useNotification();

  const [meal, setMeal] = useState('rat');
  const [count, setCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [payOpen, setPayOpen] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTokens = async () => {
    if (!user) return;
    try {
      const res = await API.get('/tokens/my'); // we'll implement server endpoint later; if not exist, fetch /tokens?userId=
      // fallback: server might not have this route; for now skip if 404
      setTokens(res.data.tokens || []);
    } catch (err) {
      // ignore
    }
  };

  useEffect(() => { fetchTokens(); }, [user]);

  const openPay = () => {
    if (!user) return addNotification({ message: 'Please login first', type: 'error' });
    if (!paymentMethod) return addNotification({ message: 'Select payment method', type: 'error' });
    setPayOpen(true);
  };

  const handleSimulate = async () => {
    try {
      const amount = TOKEN_PRICE * count;
      const res = await API.post('/pay/simulate', { userId: user.id, amount, method: paymentMethod });
      if (!res.data.success) {
        addNotification({ message: 'Payment failed', type: 'error' });
        setPayOpen(false);
        return;
      }
      // create token record(s) — here we create one token per click (if you want multiple create loop)
      const createRes = await API.post('/tokens/create', {
        userId: user.id,
        meal,
        amount,
        paymentMethod,
        paymentRef: res.data.txId,
      });
      addNotification({ message: 'Token collected', type: 'success' });
      fetchTokens();
      setPayOpen(false);
    } catch (err) {
      addNotification({ message: 'Server error', type: 'error' });
      setPayOpen(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      const res = await API.post(`/tokens/cancel/${id}`);
      addNotification({ message: res.data.message || 'Cancelled', type: 'success' });
      fetchTokens();
    } catch (err) {
      const msg = err.response?.data?.message || 'Cannot cancel';
      addNotification({ message: msg, type: 'error' });
    }
  };

  return (
    <Container style={{ marginTop: 90 }}>
      <Typography variant="h4" gutterBottom>Token Collection</Typography>

      <Box display="flex" gap={2} alignItems="center" mb={2}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Meal</InputLabel>
          <Select value={meal} label="Meal" onChange={(e) => setMeal(e.target.value)}>
            <MenuItem value="dupur">Dupur</MenuItem>
            <MenuItem value="rat">Rat</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>No</InputLabel>
          <Select value={count} label="No" onChange={(e) => setCount(e.target.value)}>
            {[1,2,3,4,5].map(n => <MenuItem key={n} value={n}>{n}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Payment</InputLabel>
          <Select value={paymentMethod} label="Payment" onChange={(e) => setPaymentMethod(e.target.value)}>
            <MenuItem value="bkash">bKash</MenuItem>
            <MenuItem value="nagad">Nagad</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mb={2}>
        <div>Price per token: ৳{TOKEN_PRICE}</div>
        <div>Total: ৳{TOKEN_PRICE * count}</div>
      </Box>

      <Button variant="contained" onClick={openPay}>Proceed to Pay</Button>

      <Dialog open={payOpen} onClose={() => setPayOpen(false)}>
        <DialogTitle>Confirm Payment</DialogTitle>
        <DialogContent>
          <p>Pay ৳{TOKEN_PRICE * count} via {paymentMethod}</p>
          <Button variant="contained" onClick={handleSimulate}>Simulate Payment</Button>
        </DialogContent>
      </Dialog>

      <Box mt={4}>
        <Typography variant="h6">My Tokens</Typography>
        <List>
          {tokens.length === 0 && <Typography color="textSecondary">No tokens yet</Typography>}
          {tokens.map(t => (
            <ListItem key={t._id} secondaryAction={
              t.status === 'active' ? <Button color="error" onClick={() => handleCancel(t._id)}>Cancel</Button> : null
            }>
              <ListItemText primary={`${t.meal} • ৳${t.amount} • ${t.status}`} secondary={`${t.date} ${t.time}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default DiningTokenSystem;










// import React, { useState, useEffect } from 'react';
// import { 
//   Calendar, Clock, Ticket, AlertCircle, User, Mail, Lock, Eye, EyeOff, 
//   LogOut, CheckCircle, XCircle, Menu, X, Home, Users, Image, LogIn, Utensils
// } from 'lucide-react';

// const DiningTokenSystem = () => {
//   const [currentPage, setCurrentPage] = useState('login');
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     email: '', password: '', name: '', studentId: '', mobile: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [tokens, setTokens] = useState([]);
//   const [tokenCount, setTokenCount] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [isTimeValid, setIsTimeValid] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await window.storage.get('current_user');
//         if (userData) {
//           const parsed = JSON.parse(userData.value);
//           setUser(parsed);
//           setCurrentPage('dashboard');
//           loadTokens(parsed.email);
//         }
//       } catch (error) {
//         console.log('No active session');
//       }
//     };
//     loadUserData();
//     checkTime();
//     const interval = setInterval(checkTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const checkTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     setIsTimeValid(hours >= 20 && hours < 22);
//   };

//   const loadTokens = async (email) => {
//     try {
//       const result = await window.storage.get(`tokens_${email}`);
//       if (result) setTokens(JSON.parse(result.value));
//     } catch (error) {
//       setTokens([]);
//     }
//   };

//   const showNotification = (message, type = 'success') => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const validatePassword = (password) => {
//     const minLength = password.length >= 8;
//     const hasUpper = /[A-Z]/.test(password);
//     const hasLower = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecial = /[!@#$%^&*]/.test(password);
//     return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
//   };

//   // Handlers remain the same
//   const handleSignup = async () => { /* ... same as before ... */ };
//   const handleLogin = async () => { /* ... same as before ... */ };
//   const handleLogout = async () => {
//     try {
//       await window.storage.delete('current_user');
//       setUser(null);
//       setTokens([]);
//       setCurrentPage('login');
//       setSidebarOpen(false);
//       showNotification('Logged out successfully');
//     } catch (error) {
//       showNotification('Logout failed', 'error');
//     }
//   };
//   const handleCollectToken = async () => { /* ... same ... */ };
//   const handleCancelToken = async (tokenId) => { /* ... same ... */ };
//   const handleKeyPress = (e, action) => { if (e.key === 'Enter') action(); };

//   // Sidebar Navigation Items
//   const navItems = [
//     { id: 'home', label: 'Home', icon: Home, requiresAuth: false },
//     { id: 'students', label: 'Students', icon: Users, requiresAuth: true },
//     { id: 'dashboard', label: 'Dining Token', icon: Utensils, requiresAuth: true },
//     { id: 'gallery', label: 'Gallery', icon: Image, requiresAuth: false },
//   ];

//   const Sidebar = () => (
//     <>
//       {/* Mobile backdrop */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-purple-700 to-pink-600 text-white shadow-2xl transform transition-transform duration-300 z-50 ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
//       }`}>
//         <div className="p-6">
//           {/* Logo & Close Button */}
//           <div className="flex justify-between items-center mb-10">
//             <div className="flex items-center gap-3">
//               <div className="bg-white/20 p-3 rounded-xl">
//                 <Utensils size={32} />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold">Nazrul Hall</h1>
//                 <p className="text-sm opacity-90">Dining Portal</p>
//               </div>
//             </div>
//             <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
//               <X size={28} />
//             </button>
//           </div>

//           {/* User Profile (if logged in) */}
//           {user && (
//             <div className="bg-white/10 rounded-2xl p-4 mb-8 backdrop-blur-sm">
//               <div className="flex items-center gap-3">
//                 <div className="bg-white/30 w-12 h-12 rounded-full flex items-center justify-center">
//                   <User size={24} />
//                 </div>
//                 <div>
//                   <p className="font-semibold">{user.name}</p>
//                   <p className="text-xs opacity-80">{user.studentId}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Navigation */}
//           <nav className="space-y-2">
//             {navItems.map((item) => (
//               (!item.requiresAuth || user) && (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     setCurrentPage(item.id === 'dashboard' ? 'dashboard' : item.id === 'home' ? 'login' : item.id);
//                     setSidebarOpen(false);
//                   }}
//                   className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all ${
//                     currentPage === (item.id === 'dashboard' ? 'dashboard' : item.id === 'home' ? 'login' : item.id)
//                       ? 'bg-white/20 shadow-lg scale-105'
//                       : 'hover:bg-white/10'
//                   }`}
//                 >
//                   <item.icon size={22} />
//                   <span className="font-medium">{item.label}</span>
//                   {currentPage === (item.id === 'dashboard' ? 'dashboard' : item.id === 'home' ? 'login' : item.id) && (
//                     <div className="ml-auto w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
//                   )}
//                 </button>
//               )
//             ))}

//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-red-500/30 transition-all mt-8"
//               >
//                 <LogOut size={22} />
//                 <span className="font-medium">Logout</span>
//               </button>
//             ) : (
//               <button
//                 onClick={() => { setCurrentPage('login'); setSidebarOpen(false); }}
//                 className="w-full flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-white/10 transition-all mt-8"
//               >
//                 <LogIn size={22} />
//                 <span className="font-medium">Login / Sign Up</span>
//               </button>
//             )}
//           </nav>

//           {/* Footer */}
//           <div className="absolute bottom-6 left-6 right-6">
//             <p className="text-xs opacity-70 text-center">
//               © 2025 JNU Nazrul Hall<br />All rights reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   // Mobile Hamburger Button
//   const MobileMenuButton = () => (
//     <button
//       onClick={() => setSidebarOpen(true)}
//       className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full p-3 lg:hidden"
//     >
//       <Menu size={28} className="text-purple-600" />
//     </button>
//   );

//   // Your existing pages (Login, Signup, Dashboard) remain the same
//   // I'll keep them but add padding-left for sidebar space
//   const LoginPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 lg:pl-72">
//       {/* ... your existing login form ... */}
//       {/* (same as before, no changes needed inside) */}
//     </div>
//   );

//   const SignupPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 flex items-center justify-center p-4 lg:pl-72">
//       {/* ... same signup form ... */}
//     </div>
//   );

//   const Dashboard = () => (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 lg:pl-72">
//       <div className="max-w-6xl mx-auto">
//         {/* ... your existing dashboard ... */}
//       </div>
//     </div>
//   );

//   return (
//     <div className="relative min-h-screen">
//       <Sidebar />
//       {currentPage !== 'dashboard' && <MobileMenuButton />}

//       {notification && (
//         <div className="fixed top-4 right-4 z-50 animate-fade-in">
//           <div className={`px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//             {notification.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
//             <p className="font-semibold">{notification.message}</p>
//           </div>
//         </div>
//       )}

//       {currentPage === 'login' && <LoginPage />}
//       {currentPage === 'signup' && <SignupPage />}
//       {currentPage === 'dashboard' && user && <Dashboard />}
//       {currentPage === 'home' && <LoginPage />}
//       {currentPage === 'students' && <div className="lg:pl-72 pt-20">Students Page (Coming Soon)</div>}
//       {currentPage === 'gallery' && <div className="lg:pl-72 pt-20">Gallery Page (Coming Soon)</div>}
//     </div>
//   );
// };

// export default DiningTokenSystem;