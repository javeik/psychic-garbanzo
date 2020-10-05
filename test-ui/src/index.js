import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en",
    initImmediate: true,
    debug: true,
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/lokalise-tests/locale/{{lgn}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="jaakko">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
