import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
}

export function Toast({ message, show, onClose, type = 'success' }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '✓';
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)',
          border: 'rgba(34, 197, 94, 0.4)',
          icon: 'rgb(34, 197, 94)'
        };
      case 'error':
        return {
          bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)',
          border: 'rgba(239, 68, 68, 0.4)',
          icon: 'rgb(239, 68, 68)'
        };
      case 'info':
        return {
          bg: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(202, 138, 4, 0.15) 100%)',
          border: 'rgba(251, 191, 36, 0.4)',
          icon: 'rgb(251, 191, 36)'
        };
      default:
        return {
          bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)',
          border: 'rgba(34, 197, 94, 0.4)',
          icon: 'rgb(34, 197, 94)'
        };
    }
  };

  const colors = getColors();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: 'fixed',
            top: '100px',
            right: '30px',
            zIndex: 99999,
            minWidth: '300px',
            maxWidth: '500px'
          }}
        >
          <div
            style={{
              background: colors.bg,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: colors.icon,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '20px',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {getIcon()}
            </motion.div>
            <div style={{ flex: 1 }}>
              <p style={{
                color: 'white',
                fontSize: '15px',
                fontWeight: '500',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {message}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '14px',
                flexShrink: 0
              }}
            >
              ✕
            </motion.button>
          </div>
          
          {/* Progress bar */}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 3, ease: "linear" }}
            style={{
              height: '3px',
              background: colors.icon,
              borderRadius: '0 0 12px 12px',
              marginTop: '-1px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
