import "../node_modules/i18nresume/dist/style.css";
import AppBar from "./AppBar";
import resume from "./assets/resume.json";
import I18NResume from "i18nresume";
import { useState } from "react";

function App() {
  const [locale, setLocale] = useState("en");
  const handleLocalChange = (value: string) => {
    setLocale(value);
  };
  return (
    <>
      <AppBar locale={locale} onLocaleChange={handleLocalChange} />
      <div>
        <I18NResume data={resume} locale={locale} />
      </div>
    </>
  );
}

export default App;
