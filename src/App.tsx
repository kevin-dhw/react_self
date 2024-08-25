import { HashRouter, Routes, Route } from "react-router-dom";
import TestTable from "./views/test/testEditable";
import Test from "./views/test";
import ConnectDetail from "./views/project/connect/detail";
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
      {/* <Button
        onClick={() =>
          setLocale((val) => {
            let newVal = "";
            if (val === "zh-CN") {
              newVal = "en-US";
            } else {
              newVal = "zh-CN";
            }
            return newVal;
          })
        }
      >
        切换
      </Button> */}
      {/* <IntlProvider messages={messages[locale]} locale={locale}> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/test" element={<Test />} />
          <Route path="/testTable" element={<TestTable />} />
          <Route path="/connectDetail" element={<ConnectDetail />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </HashRouter>
      {/* </IntlProvider> */}
    </>
  );
}

export default App;
