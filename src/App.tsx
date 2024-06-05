import "../node_modules/i18nresume/dist/style.css";
import resume from "./assets/resume.json";
import I18NResume from "i18nresume";

function App() {
  return (
    <>
      <h1>Edu's page</h1>
      <div>
        <I18NResume data={resume} locale="es" />
      </div>
    </>
  );
}

export default App;
