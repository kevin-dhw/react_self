import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Detail from "./views/test/prictice/time/components/detail";
// import { useState } from "react";
// import { Button } from "antd";
// import "./App.css";
// import { IntlProvider } from "react-intl";
// import { enUS } from "./views/locale/en-US.ts";
// import { zhCN } from "./views/locale/zh-CN.ts";

// const messages: Record<string, any> = {
//   "en-US": enUS,
//   "zh-CN": zhCN,
// };

function App() {
  // const [locale, setLocale] = useState("zh-CN");
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/test" element={<Test />} />
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </HashRouter>
      {/* </IntlProvider> */}
    </>
  );
}

export default App;
