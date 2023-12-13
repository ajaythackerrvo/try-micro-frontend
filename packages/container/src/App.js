import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingSection'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <MarketingLazy />
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
