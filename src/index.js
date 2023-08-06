import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntlProvider } from "react-intl";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import enUsMsg from "./locale/en-US.json";
import koMsg from "./locale/ko.json";
import Error from "pages/error";
import Main from "pages/main";
import Inquiry from "pages/inquiry";
import Tolist from "pages/tolist";

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // loader: defaultPageCheck,
    children: [
      {
        index: true,
        element: <Main />,
        // loader: noticeLoader,
      },
      {
        path: "/inquiry",
        element: <Inquiry title="leftmenu.01.0101" />,
        // loader: noticeLoader,
      },
    ],
  },
  {
    path: "/tolist",
    element: <Tolist />,
    errorElement: <Error />,
  },
]);

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <RouterProvider router={router} />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
