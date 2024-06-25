import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSection from '../components/productSection';
import config from '../config.json';
import './App.css';
function App() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    // Fetch configuration data
    setSettings(config);
  }, []);

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="App">
      <Header 
        shopName={settings.shopName} 
        bgColor={settings.headerBgColor} 
        color={settings.headerColor} 
      />
      <main>
        <ProductSection className=""
          heading={settings.productsHeading} 
          products={settings.products} 
          cardBgColor={settings.cardBgColor} 
        />
      </main>
      <Footer footerText={settings.footerText} 
        bgColor={settings.footerBgcolor}
        />
     
    </div>
  );
}

export default App;