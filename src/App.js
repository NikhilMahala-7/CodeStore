import {BrowserRouter , Routes , Route} from "react-router-dom"
import UserAuthentication from "./User-Authentication/UserAuthentication.js"
import { CodeStoreCanvas } from "./CodeStoreCanvas/CodeStoreCanvas.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-authentication" element= {<UserAuthentication/>}/>
        <Route path="/codestore-canvas" element={<CodeStoreCanvas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
