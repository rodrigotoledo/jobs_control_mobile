/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { QueryClient, QueryClientProvider} from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient()

axios.defaults.baseURL = 'https://4109-45-71-76-107.ngrok-free.app';

const RootComponent = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => RootComponent);
