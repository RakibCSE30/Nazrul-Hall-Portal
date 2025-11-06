// // src/components/Notification.js
 
// // import { CheckCircle, AlertCircle } from 'lucide-react';

// // const Notification = ({ message, type }) => {
// //   return (
// //     <div className="fixed top-4 right-4 z-50 animate-fade-in">
// //       <div
// //         className={`px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${
// //           type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
// //         }`}
// //       >
// //         {type === 'success' ? (
// //           <CheckCircle size={24} />
// //         ) : (
// //           <AlertCircle size={24} />
// //         )}
// //         <p className="font-semibold">{message}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Notification;

// import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
// import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

// const ToastContext = createContext({
//   addToast: () => {},
//   removeToast: () => {},
// });

// /**
//  * useToast hook
//  * const { addToast } = useToast();
//  * addToast({ message: 'Saved', type: 'success', duration: 4000 });
//  */
// export const useToast = () => useContext(ToastContext);

// /**
//  * ToastProvider
//  * Wrap your app with <ToastProvider offsetTop="4rem">...</ToastProvider>
//  * offsetTop: a CSS size string to offset toasts below a navbar (default '4rem')
//  */
// export const ToastProvider = ({ children, offsetTop = '4rem', position = 'top-right', maxToasts = 5 }) => {
//   const [toasts, setToasts] = useState([]);

//   const addToast = ({ message, type = 'success', duration = 4000 }) => {
//     const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
//     setToasts((prev) => {
//       const next = [...prev, { id, message, type, duration }];
//       // enforce maxToasts by removing oldest if needed
//       if (next.length > maxToasts) next.shift();
//       return next;
//     });
//     return id;
//   };

//   const removeToast = (id) => {
//     setToasts((prev) => prev.filter((t) => t.id !== id));
//   };

//   return (
//     <ToastContext.Provider value={{ addToast, removeToast }}>
//       {children}

//       {/* Container */}
//       <div
//         aria-live="polite"
//         aria-atomic="true"
//         className="fixed z-50 pointer-events-none"
//         style={{
//           top: offsetTop,
//           right: '1rem',
//           left: 'auto',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '0.75rem',
//           alignItems: 'flex-end',
//           maxWidth: 'clamp(240px, 32vw, 420px)',
//         }}
//       >
//         {toasts.map((t) => (
//           <Toast key={t.id} toast={t} onClose={() => removeToast(t.id)} />
//         ))}
//       </div>
//     </ToastContext.Provider>
//   );
// };

// /**
//  * Single Toast component
//  * Manages its own timer and pause-on-hover behavior
//  */
// const Toast = ({ toast, onClose }) => {
//   const { message, type, duration } = toast;
//   const timerRef = useRef(null);
//   const startRef = useRef(null);
//   const remainingRef = useRef(duration);

//   useEffect(() => {
//     startTimer(remainingRef.current);

//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const startTimer = (ms) => {
//     startRef.current = Date.now();
//     if (timerRef.current) clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       onClose();
//     }, ms);
//   };

//   const pauseTimer = () => {
//     if (!timerRef.current) return;
//     clearTimeout(timerRef.current);
//     const elapsed = Date.now() - startRef.current;
//     remainingRef.current = Math.max(0, remainingRef.current - elapsed);
//   };

//   const resumeTimer = () => {
//     if (remainingRef.current <= 0) {
//       onClose();
//     } else {
//       startTimer(remainingRef.current);
//     }
//   };

//   const icon = {
//     success: <CheckCircle size={20} />,
//     error: <AlertCircle size={20} />,
//     info: <Info size={20} />,
//   }[type || 'info'];

//   const bg = {
//     success: 'bg-green-600 text-white',
//     error: 'bg-red-600 text-white',
//     info: 'bg-sky-600 text-white',
//   }[type || 'info'];

//   return (
//     <div
//       role="status"
//       className={`pointer-events-auto w-full ${bg} px-4 py-3 rounded-lg shadow-lg flex items-start gap-3 transform transition duration-200 ease-out`}
//       onMouseEnter={pauseTimer}
//       onMouseLeave={resumeTimer}
//       style={{
//         // subtle entrance transform (Tailwind classes used where available)
//         // Using inline style for a small translate to avoid dependency on custom animation classes.
//         translate: '0px 0px',
//       }}
//     >
//       <div className="mt-0.5">{icon}</div>
//       <div className="flex-1">
//         <p className="font-semibold text-sm leading-snug">{message}</p>
//       </div>

//       <button
//         aria-label="Close notification"
//         onClick={onClose}
//         className="ml-2 text-white opacity-90 hover:opacity-100 transition"
//       >
//         <X size={16} />
//       </button>
//     </div>
//   );
// };

// export default ToastProvider;







import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

/**
 * Notification provider + hook
 * Wrap your app with <Notification offsetTop="70px"> ... </Notification>
 * Use in components:
 *   const { addNotification } = useNotification();
 *   addNotification({ message: 'Saved', type: 'success', duration: 4000 });
 */

const NotificationContext = createContext({
  addNotification: () => {},
  removeNotification: () => {},
});

export const useNotification = () => useContext(NotificationContext);

const Notification = ({ children, offsetTop = '4rem', maxNotifications = 5 }) => {
  const [toasts, setToasts] = useState([]);

  const addNotification = ({ message, type = 'info', duration = 4000 }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    setToasts((prev) => {
      const next = [...prev, { id, message, type, duration }];
      if (next.length > maxNotifications) next.shift();
      return next;
    });
    return id;
  };

  const removeNotification = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      {children}

      {/* Toast container */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed z-50 pointer-events-none"
        style={{
          top: offsetTop,
          right: '1rem',
          left: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          alignItems: 'flex-end',
          maxWidth: 'clamp(240px, 32vw, 420px)',
        }}
      >
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeNotification(t.id)} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default Notification;

const ToastItem = ({ toast, onClose }) => {
  const { message, type, duration } = toast;
  const timerRef = useRef(null);
  const startRef = useRef(null);
  const remainingRef = useRef(duration ?? 4000);

  useEffect(() => {
    startTimer(remainingRef.current);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = (ms) => {
    startRef.current = Date.now();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onClose();
    }, ms);
  };

  const pauseTimer = () => {
    if (!timerRef.current) return;
    clearTimeout(timerRef.current);
    const elapsed = Date.now() - startRef.current;
    remainingRef.current = Math.max(0, remainingRef.current - elapsed);
  };

  const resumeTimer = () => {
    if (remainingRef.current <= 0) {
      onClose();
    } else {
      startTimer(remainingRef.current);
    }
  };

  const icon = {
    success: <CheckCircle size={18} />,
    error: <AlertCircle size={18} />,
    info: <Info size={18} />,
  }[type || 'info'];

  const bg = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-sky-600 text-white',
  }[type || 'info'];

  return (
    <div
      role="status"
      className={`pointer-events-auto w-full ${bg} px-4 py-3 rounded-lg shadow-lg flex items-start gap-3 transform transition duration-150 ease-out`}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <div className="mt-0.5">{icon}</div>
      <div className="flex-1">
        <p className="font-semibold text-sm leading-snug">{message}</p>
      </div>

      <button
        aria-label="Close notification"
        onClick={onClose}
        className="ml-2 text-white opacity-90 hover:opacity-100 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
};






