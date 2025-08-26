import {BrowserRouter , Routes , Route} from "react-router-dom"
import Authentication from "./Authentication/Authentication.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
