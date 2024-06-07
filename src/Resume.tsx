import "../node_modules/i18nresume/dist/style.css";
import "./Resume.css";
import resume from "./assets/resume.json";
import I18NResume from "i18nresume";

function Resume({ locale }: { locale: string }) {
  return <I18NResume data={resume} locale={locale} />;
}

export default Resume;
