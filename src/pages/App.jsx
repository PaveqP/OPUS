import { Registration } from "./registration/Registration"
import { Authorization } from "./authorization/Authorization"
import { Lk } from './lk/Lk'
import { Settings } from "./settings/Settings"
import { MainAuth } from "./mainAuth/MainAuth"
import { MainNotAuth } from "./mainNotAuth/MainNotAuth"
import { PortfolioPage } from "./portfolioPage/PortfolioPage"
import { ProjectsPage } from "./projectsPage/ProjectsPage"
import "../pages/App.scss"

function App() {
  return (
    <div className="App">
      <MainAuth />
    </div>
  );
}

export default App;
