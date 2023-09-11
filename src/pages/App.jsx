
import { Authorization } from "./authorization/Authorization"
import {Lk} from './lk/Lk'
import { Settings } from "./settings/Settings"
import { MainAuth } from "./mainAuth/MainAuth"
import { MainNotAuth } from "./mainNotAuth/MainNotAuth"
import "../pages/App.scss"

function App() {
  return (
    <div className="App">
      <Lk />
      {/* <Main />
      <MainNotAuth /> */}
    </div>
  );
}

export default App;
