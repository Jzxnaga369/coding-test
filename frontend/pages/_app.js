import './styles/global.css';
import './components/navbar.css';
import './components/slider.css';
import './components/chatbox.css';
import { Provider } from 'react-redux';
import store from '../store/index';
import Modal from 'react-modal';
import Layout from './layout';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;