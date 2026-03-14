import React from 'react';

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        width: '300px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333'
        }}>Login</h2>
        <form>
          <div style={{
            marginBottom: '1rem'
          }}>
            <label htmlFor="username" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter username" 
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{
            marginBottom: '1.5rem'
          }}>
            <label htmlFor="password" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button 
            type="submit" 
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;