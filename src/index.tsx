import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);

