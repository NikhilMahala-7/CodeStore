import {BrowserRouter , Routes , Route} from "react-router-dom"
import Authentication from "./Authentication/Authentication.js"
import UserAuthentication from "./User-Authentication/UserAuthentication.js"
import API from "./API/API.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication/>}></Route>
        <Route path="/api" element={<API/>}/>
        <Route path="/user-authentication" element= {<UserAuthentication/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
