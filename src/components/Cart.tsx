import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'motion/react';

export function Cart() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Background Section with Parallax */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <motion.div
          style={{ 
            y: backgroundY,
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{
              scale: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              },
              opacity: {
                duration: 1.2,
                ease: "easeOut"
              }
            }}
            style={{ width: '100%', height: '100%' }}
          >
            <motion.div 
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              initial={{ filter: "brightness(0.7) contrast(1)" }}
              animate={{ 
                filter: [
                  "brightness(0.7) contrast(1)",
                  "brightness(0.8) contrast(1.05)",
                  "brightness(0.7) contrast(1)"
                ]
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation isLoaded={isLoaded} />
          
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            padding: '48px 32px' 
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{ width: '100%', maxWidth: '1200px' }}
            >
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '48px',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '40px',
                    letterSpacing: '0.1em'
                  }}
                >
                  Shopping Cart
                </motion.h1>

                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center',
                      padding: '80px 20px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px' }}>
                      Your cart is empty
                    </div>
                    <p style={{ fontSize: '16px', marginBottom: '24px' }}>
                      Start designing your dream jewelry!
                    </p>
                    <a
                      href="#custom-design"
                      style={{
                        display: 'inline-block',
                        padding: '12px 32px',
                        background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                        color: 'black',
                        fontWeight: '600',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                      }}
                    >
                      Start Designing
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <AnimatePresence>
                      {cart.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '20px',
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            gap: '24px',
                            alignItems: 'center'
                          }}
                        >
                          <div>
                            <h3 style={{
                              color: 'white',
                              fontSize: '20px',
                              fontWeight: '600',
                              marginBottom: '12px',
                              fontFamily: "'Playfair Display', serif"
                            }}>
                              Custom {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </h3>
                            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>
                              <strong>Metal:</strong> {item.metal} (${item.metalPrice})
                            </div>
                            {item.gemstone && (
                              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>
                                <strong>Gemstone:</strong> {item.gemstone} (+${item.gemstonePrice})
                              </div>
                            )}
                            {item.engravingText && (
                              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>
                                <strong>Engraving:</strong> "{item.engravingText}" (+$80)
                              </div>
                            )}
                            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>
                              <strong>Size:</strong> {item.size}
                            </div>
                            {item.designMode && (
                              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                                <strong>Custom Design:</strong> {item.designMode} (+$150)
                              </div>
                            )}
                            
                            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                              <span style={{ color: 'white', fontSize: '14px' }}>Quantity:</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                style={{
                                  padding: '6px 12px',
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)',
                                  borderRadius: '6px',
                                  color: 'white',
                                  cursor: 'pointer'
                                }}
                              >
                                -
                              </button>
                              <span style={{ color: 'white', fontSize: '16px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                style={{
                                  padding: '6px 12px',
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)',
                                  borderRadius: '6px',
                                  color: 'white',
                                  cursor: 'pointer'
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{
                              fontSize: '28px',
                              fontWeight: 'bold',
                              color: 'rgb(251, 191, 36)',
                              marginBottom: '16px',
                              fontFamily: "'Playfair Display', serif"
                            }}>
                              ${item.estimatedPrice * item.quantity}
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              style={{
                                padding: '10px 20px',
                                background: 'rgba(239, 68, 68, 0.9)',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                              }}
                            >
                              🗑️ Remove
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    <div style={{
                      marginTop: '32px',
                      padding: '32px',
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(202, 138, 4, 0.2) 100%)',
                      border: '2px solid rgb(251, 191, 36)',
                      borderRadius: '12px',
                      textAlign: 'right'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        color: 'white',
                        marginBottom: '8px'
                      }}>
                        Total Price
                      </div>
                      <div style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: 'rgb(251, 191, 36)',
                        fontFamily: "'Playfair Display', serif"
                      }}>
                        ${getTotalPrice()}
                      </div>
                      <button
                        style={{
                          marginTop: '24px',
                          padding: '16px 48px',
                          background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                          color: 'black',
                          fontWeight: '600',
                          fontSize: '18px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
