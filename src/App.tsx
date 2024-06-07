import "../node_modules/i18nresume/dist/style.css";
import "./App.css";
import MainAppBar from "./MainAppBar";
import resume from "./assets/resume.json";
import InterestsIcon from "@mui/icons-material/Interests";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import I18NResume from "i18nresume";
import { useState } from "react";

function App() {
  const [locale, setLocale] = useState("en");
  const handleLocalChange = (value: string) => {
    setLocale(value);
  };
  const [selectedTag, setSelectedTab] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <MainAppBar locale={locale} onLocaleChange={handleLocalChange} />
      <TabContext value={selectedTag}>
        <Box position="sticky" top={0} sx={{ backgroundColor: "white" }}>
          <Toolbar variant="dense" />
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered={isLargeScreen}
              variant={isLargeScreen ? "standard" : "fullWidth"}
              onChange={handleChange}
            >
              <Tab
                icon={<WorkspacePremiumIcon />}
                label={locale === "es" ? "Currículum" : "Resume"}
                iconPosition={isLargeScreen ? "start" : "top"}
                value="1"
              />
              <Tab
                icon={<InterestsIcon />}
                label={locale === "es" ? "Trabajos" : "Porfolio"}
                iconPosition={isLargeScreen ? "start" : "top"}
                value="2"
              />
            </TabList>
          </Box>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <I18NResume data={resume} locale={locale} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          Item Two
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
