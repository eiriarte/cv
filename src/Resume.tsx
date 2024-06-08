import "../node_modules/i18nresume/dist/style.css";
import { FilterOption } from "./MainAppBar";
import "./Resume.css";
import resume from "./assets/resume.json";
import I18NResume from "i18nresume";

function Resume({ locale, filter }: { locale: string; filter: FilterOption[] }) {
  return <I18NResume data={resume} locale={locale} filter={filter} />;
}

export default Resume;
