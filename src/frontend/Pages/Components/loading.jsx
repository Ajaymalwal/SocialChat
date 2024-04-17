import React from 'react';

function Loading() {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        height: '100px',
        width: '100px',
        border: '20px solid black',
        borderRadius: '70px',
        borderTopColor: 'red',
        animation: 'spin 2s linear infinite'
      }}></div>
       <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
