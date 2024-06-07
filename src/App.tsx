import MainAppBar from "./MainAppBar";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import InterestsIcon from "@mui/icons-material/Interests";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const theme = useTheme();
  const [locale, setLocale] = useState("en");
  const [selectedTab, setSelectedTab] = useState("1");
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const handleLocaleChange = (value: string) => {
    setLocale(value);
  };
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <MainAppBar locale={locale} onLocaleChange={handleLocaleChange} />
      <TabContext value={selectedTab}>
        <Box position="sticky" top={0} sx={{ backgroundColor: "white", zIndex: 9 }}>
          <Toolbar variant="dense" />
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered={isLargeScreen}
              variant={isLargeScreen ? "standard" : "fullWidth"}
              onChange={handleTabChange}
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
          <Resume locale={locale} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          <Portfolio locale={locale} />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
