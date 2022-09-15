import App from "./App";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./store";
import 'bootstrap/dist/css/bootstrap.css'

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)