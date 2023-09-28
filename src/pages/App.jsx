
import { Authorization } from "./authorization/Authorization"
import {Lk} from './lk/Lk'
import { Settings } from "./settings/Settings"
import { MainAuth } from "./mainAuth/MainAuth"
import { MainNotAuth } from "./mainNotAuth/MainNotAuth"
import { PortfolioPage } from "./portfolioPage/PortfolioPage"
import "../pages/App.scss"

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Lk />
      {/* <Main />
      <MainNotAuth /> */}
=======
      <PortfolioPage currentpage={"Разработка"} />
>>>>>>> 267c6baa51ce1b461d72749a3b561c77149743ca
    </div>
  );
}

export default App;
