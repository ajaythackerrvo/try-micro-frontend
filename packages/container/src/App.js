import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingSection from './components/MarketingSection';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingSection />
      </div>
    </BrowserRouter>
  );
};
