
import { Authorization } from "./authorization/Authorization"
import {Lk} from './lk/Lk'
import { Settings } from "./settings/Settings"
import { Main } from "./main/Main"
import "../pages/App.scss"

function App() {
  return (
    <div className="App">
      <Lk />
      <Main />
    </div>
  );
}

export default App;
