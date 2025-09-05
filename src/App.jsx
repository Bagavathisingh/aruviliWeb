import "./App.css";
import IndexApp from "./pages/LayOut";
import Index from "./pages/IndexComponent"
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexApp/>}>
      <Route index element={<Index/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;