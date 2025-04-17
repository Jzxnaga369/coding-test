import './styles/global.css';
import './components/navbar.css';
import './components/slider.css';
import { Provider } from 'react-redux';
import store from '../store/index';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;