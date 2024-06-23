import { HashRouter, Routes, Route } from "react-router-dom";
import TestTable from "./views/test/testEditable";
import Test from "./views/test";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testTable" element={<TestTable />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
