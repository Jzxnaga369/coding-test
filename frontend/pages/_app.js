import './styles/global.css';
import './components/navbar.css';
import './components/slider.css';
import { Provider } from 'react-redux';
import store from '../store/index';
import Modal from 'react-modal';

Modal.setAppElement('#__next'); //im using this for pop out modal


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;