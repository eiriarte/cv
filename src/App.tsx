import MainAppBar, { FilterOption } from "./MainAppBar";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import InterestsIcon from "@mui/icons-material/Interests";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Paper, Tab, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const theme = useTheme();
  const [locale, setLocale] = useState<"en" | "es">("en");
  const [filter, setFilter] = useState<FilterOption>("all");
  const filterList = filter === "all" ? [] : [filter];
  const [selectedTab, setSelectedTab] = useState("1");
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const handleLocaleChange = (value: "en" | "es") => {
    setLocale(value);
  };
  const handleFilterChange = (value: FilterOption) => {
    setFilter(value);
  };
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <MainAppBar
        locale={locale}
        onLocaleChange={handleLocaleChange}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <TabContext value={selectedTab}>
        <Box position="sticky" top={0} sx={{ backgroundColor: "white", zIndex: 9 }}>
          <Toolbar variant="dense" />
          <Paper elevation={2} square sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                label={locale === "es" ? "Trabajos" : "Portfolio"}
                iconPosition={isLargeScreen ? "start" : "top"}
                value="2"
              />
            </TabList>
          </Paper>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <Resume locale={locale} filter={filterList} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          <Portfolio locale={locale} filter={filterList} />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
