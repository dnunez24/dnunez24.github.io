import React from 'react';
import type { FC } from 'react';
// import { ExperimentsProvider } from 'common/experimentation';
// import { ErrorHandlerProvider } from 'common/errors';
// import { FetchProvider } from 'common/data-fetching';
// import { AppStateProvider } from './AppStateProvider';
import { AppThemeProvider } from './AppThemeProvider';

const App: FC = ({ children }) => (
  // <AppStateProvider>
  //   <ErrorHandlerProvider>
  //     <ExperimentsProvider>
  //       <FetchProvider>
  <AppThemeProvider>{children}</AppThemeProvider>
  //       </FetchProvider>
  //     </ExperimentsProvider>
  //   </ErrorHandlerProvider>
  // </AppStateProvider>
);

export { App };
