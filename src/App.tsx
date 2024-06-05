import "../node_modules/i18nresume/dist/style.css";
import AppBar from "./AppBar";
import resume from "./assets/resume.json";
import I18NResume from "i18nresume";

function App() {
  return (
    <>
      <AppBar />
      <div>
        <I18NResume data={resume} locale="es" />
      </div>
    </>
  );
}

export default App;
