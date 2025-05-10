import React from 'react';
const logo = new URL('./assets/Logo_TheLocationIsEverythingCo.png', import.meta.url).href;



const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src={logo}
        alt="The Location Is Everything Co Logo"
        style={{ width: '200px', height: 'auto' }}
      />
      <h1>Welcome to The Location Is Everything Co</h1>
      <p>Your location-centric solutions start here.</p>
    </div>
  );
};

export default App;
