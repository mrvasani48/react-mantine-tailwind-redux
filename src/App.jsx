import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import theme from './theme/theme';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/Routes';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS classNamesPrefix='app'>
          <Router>
            <AppRoutes />
          </Router>
        </MantineProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
