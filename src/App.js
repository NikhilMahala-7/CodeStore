import {BrowserRouter , Routes , Route} from "react-router-dom"
import UserAuthentication from "./User-Authentication/UserAuthentication.js"
import UserWorkSpace from "./UserWorkSpace/UserWorkSpace.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-authentication" element= {<UserAuthentication/>}/>
        <Route path="/user-workspace" element={<UserWorkSpace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
