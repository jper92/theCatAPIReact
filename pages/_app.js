import '../styles/globals.css';

import { Provider } from 'react-redux';
import withReduxStore from '../lib/withReduxStore';

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withReduxStore(MyApp);
