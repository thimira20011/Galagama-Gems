import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Packages() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Background Section with Parallax */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Background Image with Ken Burns Effect and Parallax */}
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

        {/* Overlay gradient for better text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent, rgba(0, 0, 0, 0.5))'
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation isLoaded={isLoaded} />
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 2rem',
              textAlign: 'center'
            }}
          >
            <div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Our Premium Packages
              </h1>
              <p style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Discover our curated collections of exquisite gemstones and jewelry, crafted with precision and passion
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Packages Content Section */}
      <div style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Featured Packages
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Starter Collection',
                price: '$1,999',
                description: 'Perfect for those beginning their gemstone journey',
                features: ['3 Handcrafted Pieces', 'Certificate of Authenticity', 'Gift Box Packaging', '1 Year Warranty'],
                image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
              },
              {
                title: 'Premium Collection',
                price: '$4,999',
                description: 'Curated selection of our finest gemstones',
                features: ['6 Handcrafted Pieces', 'Certificate of Authenticity', 'Luxury Gift Box', '2 Year Warranty', 'Free Cleaning Service'],
                image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
              },
              {
                title: 'Elite Collection',
                price: '$9,999',
                description: 'The ultimate expression of luxury and elegance',
                features: ['10 Handcrafted Pieces', 'Certificate of Authenticity', 'Premium Luxury Box', 'Lifetime Warranty', 'Free Cleaning & Maintenance', 'Personal Consultation'],
                image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
              >
                <motion.div 
                  style={{
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                    backgroundColor: '#e5e7eb'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </motion.div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#111827'
                  }}>
                    {pkg.title}
                  </h3>
                  <p style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {pkg.price}
                  </p>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {pkg.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {pkg.features.map((feature, i) => (
                      <li key={i} style={{
                        padding: '0.5rem 0',
                        color: '#374151',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: 'rgb(251, 191, 36)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                      color: 'black',
                      fontWeight: '600',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Select Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wedding Packages Section */}
      <div style={{ backgroundColor: '#f9fafb', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Wedding Packages
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Engagement Rings',
                price: '$1,899',
                description: 'Begin your forever with the perfect engagement ring',
                features: ['Custom Design Consultation', 'Choice of Diamond or Gemstone', '18K Gold or Platinum Band', 'Certificate of Authenticity', 'Lifetime Warranty', 'Free Resizing'],
                image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80'
              },
              {
                title: 'Bridal Package',
                price: '$5,999',
                description: 'Complete bridal jewelry set for your special day',
                features: ['Engagement Ring', 'Wedding Band Set', 'Matching Earrings', 'Elegant Necklace', 'Certificate of Authenticity', 'Luxury Gift Box', '2 Year Warranty', 'Free Cleaning Service'],
                image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
              },
              {
                title: 'Premium Wedding Package',
                price: '$12,999',
                description: 'The ultimate wedding jewelry collection for both bride and groom',
                features: ['His & Her Engagement Rings', 'Matching Wedding Bands', 'Bridal Jewelry Set', 'Groom\'s Cufflinks', 'Premium Gift Packaging', 'Certificate of Authenticity', 'Lifetime Warranty', 'Personal Wedding Consultant', 'Free Maintenance for Life'],
                image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
              >
                <motion.div 
                  style={{
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                    backgroundColor: '#e5e7eb'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </motion.div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#111827'
                  }}>
                    {pkg.title}
                  </h3>
                  <p style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {pkg.price}
                  </p>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {pkg.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {pkg.features.map((feature, i) => (
                      <li key={i} style={{
                        padding: '0.5rem 0',
                        color: '#374151',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: 'rgb(251, 191, 36)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      background: 'linear-gradient(to right, rgb(251, 191, 36), rgb(202, 138, 4))',
                      color: 'black',
                      fontWeight: '600',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Select Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
