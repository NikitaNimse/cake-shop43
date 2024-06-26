import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSection from '../components/productSection';
import config from '../config.json';
import './Home.css';
function Home() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    // Fetch configuration data
    setSettings(config);
  }, []);

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="App">
      <Header 
        Name={settings.Name} 
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
      <Footer footerdata={settings.footerdata} 
        bgColor={settings.footerBgcolor}
        />
     
    </div>
  );
}

export default Home;