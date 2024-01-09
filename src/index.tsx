/* eslint-disable react/react-in-jsx-scope */

import ReactDOM from "react-dom/client";

import './slyles/reset.scss';
import './slyles/variables.scss';
import './slyles/mixins.scss';
import './slyles/fonts.scss';

import './slyles/index.scss';

import { Provider } from 'react-redux';
import { store } from './api/store';

import { App } from './page/App';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
