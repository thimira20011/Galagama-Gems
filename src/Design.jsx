import React, { useState } from 'react';
import './App.css';

const Design = () => {
  const [selectedGem, setSelectedGem] = useState('');
  const [selectedMetal, setSelectedMetal] = useState('');

  return (
    <div>
      <style>{`
        @media (max-width: 968px) {
          .design-studio-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div className="section" style={{ marginTop: '70px', paddingTop: '3rem' }}>
        <div className="container">
          {/* Main Title and Welcome Message */}
          <div className="section-title fade-in">
            <h1>Galagama Gems 3D Design Studio</h1>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--color-text-light)', 
              marginTop: '1rem',
              maxWidth: '800px',
              margin: '1rem auto 0'
            }}>
              Create your unique, personalized jewelry from scratch. Select your gem, choose your metal and setting, 
              and bring your vision to life with our intuitive 3D design tool.
            </p>
          </div>

          {/* Main Studio Layout */}
          <div className="design-studio-container" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '2rem',
            marginTop: '3rem',
            minHeight: '600px'
          }}>
            {/* 3D Viewer Section */}
            <div className="design-viewer" style={{
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: 'var(--border-radius)',
              boxShadow: 'var(--shadow)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '600px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                borderRadius: 'var(--border-radius)',
                border: '2px dashed #ddd',
                color: 'var(--color-text-light)',
                fontSize: '1.1rem',
                textAlign: 'center',
                padding: '3rem'
              }}>
                <div>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    color: 'var(--color-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    3D Viewer
                  </h3>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    Your 3D jewelry model will appear here
                  </p>
                </div>
              </div>
            </div>

            {/* Design Controls Sidebar */}
            <div className="design-controls" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {/* Select Gem Section */}
              <div className="control-section" style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow)',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-dark)'
                }}>
                  Select Gem
                </h3>
                <select
                  value={selectedGem}
                  onChange={(e) => setSelectedGem(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid #ddd',
                    fontFamily: 'var(--font-primary)',
                    fontSize: '0.95rem',
                    color: 'var(--color-text)',
                    backgroundColor: 'var(--color-white)',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                >
                  <option value="">Choose a gem...</option>
                  <option value="diamond">Diamond</option>
                  <option value="ruby">Ruby</option>
                  <option value="sapphire">Sapphire</option>
                  <option value="emerald">Emerald</option>
                  <option value="pearl">Pearl</option>
                  <option value="amethyst">Amethyst</option>
                </select>
              </div>

              {/* Select Metal/Setting Section */}
              <div className="control-section" style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow)',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-dark)'
                }}>
                  Select Metal/Setting
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: 'var(--border-radius)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input
                      type="radio"
                      name="metal"
                      value="gold"
                      checked={selectedMetal === 'gold'}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--color-text)' }}>Gold</span>
                  </label>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: 'var(--border-radius)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input
                      type="radio"
                      name="metal"
                      value="silver"
                      checked={selectedMetal === 'silver'}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--color-text)' }}>Silver</span>
                  </label>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: 'var(--border-radius)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input
                      type="radio"
                      name="metal"
                      value="platinum"
                      checked={selectedMetal === 'platinum'}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--color-text)' }}>Platinum</span>
                  </label>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: 'var(--border-radius)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input
                      type="radio"
                      name="metal"
                      value="rose-gold"
                      checked={selectedMetal === 'rose-gold'}
                      onChange={(e) => setSelectedMetal(e.target.value)}
                      style={{ cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--color-text)' }}>Rose Gold</span>
                  </label>
                </div>
              </div>

              {/* Design Preview Section */}
              <div className="control-section" style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow)',
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-dark)'
                }}>
                  Design Preview
                </h3>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: 'var(--color-bg-alt)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px dashed #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-light)',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🖼️</div>
                    <p>Preview thumbnail</p>
                  </div>
                </div>
              </div>

              {/* Connect with Creator Button */}
              <div className="control-section" style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow)',
                padding: '1.5rem'
              }}>
                <button
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                  onClick={() => {
                    // Placeholder for future functionality
                    alert('Connect with our vetted creators to bring your design to life!');
                  }}
                >
                  Connect with Creator
                </button>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-light)',
                  marginTop: '0.75rem',
                  textAlign: 'center'
                }}>
                  Find vetted manufacturers from our global network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
