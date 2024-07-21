// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { IntlProvider } from "react-intl";
import "./index.css";
import { ClickToComponent } from "click-to-react-component";
import { enUS } from "./views/locale/en-US.ts";
import { zhCN } from "./views/locale/zh-CN.ts";

const messages: Record<string, any> = {
  "en-US": enUS,
  "zh-CN": zhCN,
};
const locale = "zh-CN";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <IntlProvider messages={messages[locale]} locale={locale}>
    <ClickToComponent />
    <App />
  </IntlProvider>
);
