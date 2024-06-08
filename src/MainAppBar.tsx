import EsFlag from "./assets/es.svg?react";
import EnFlag from "./assets/uk.svg?react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  AppBar,
  Badge,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { ElementType, useState } from "react";

export type FilterOption = "all" | "F" | "B";
type LocaleChangeCallback = (value: "en" | "es") => void;
type FilterChangeCallback = (value: FilterOption) => void;

function MainAppbar({
  locale,
  onLocaleChange,
  filter,
  onFilterChange
}: {
  locale: "en" | "es";
  onLocaleChange: LocaleChangeCallback;
  filter: FilterOption;
  onFilterChange: FilterChangeCallback;
}) {
  const strings = {
    title: { es: "Desarrollador full-stack", en: "Full-stack engineer" },
    chooseLanguage: { es: "Elegir idioma", en: "Choose language" },
    spanish: { es: "Español", en: "Spanish" },
    english: { es: "Inglés", en: "English" },
    filterSkills: { es: "Filtrar competencias", en: "Filter by skills" },
    all: { es: "Todo", en: "All skills" },
    F: { es: "Solo frontend", en: "Frontend skills" },
    B: { es: "Solo backend", en: "Backend skills" }
  };
  const Flag = (locale === "es" ? EsFlag : EnFlag) as ElementType;
  const [localeAnchor, setLocaleAnchor] = useState<null | HTMLElement>(null);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);
  const handleLocaleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLocaleAnchor(event.currentTarget);
  };
  const handleLocaleClose = () => {
    setLocaleAnchor(null);
  };
  const handleLocaleItemClick = (_event: React.MouseEvent<HTMLElement>, newValue: "en" | "es") => {
    setLocaleAnchor(null);
    onLocaleChange(newValue);
  };
  const handleFilterMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchor(event.currentTarget);
  };
  const handleFilterClose = () => {
    setFilterAnchor(null);
  };
  const handleFilterItemClick = (_event: React.MouseEvent<HTMLElement>, newValue: FilterOption) => {
    setFilterAnchor(null);
    console.log(newValue);
    onFilterChange(newValue);
  };

  const renderLocaleMenu = (
    <>
      <Tooltip title={strings.chooseLanguage[locale]}>
        <IconButton
          id="locale-button"
          aria-label={strings.chooseLanguage[locale]}
          aria-haspopup="listbox"
          aria-controls="locale-menu"
          onClick={handleLocaleMenuClick}
          size="large"
        >
          <SvgIcon component={Flag} viewBox="0 0 512 512" sx={{ borderRadius: "50%" }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="locale-menu"
        anchorEl={localeAnchor}
        open={Boolean(localeAnchor)}
        onClose={handleLocaleClose}
        MenuListProps={{
          "aria-labelledby": "locale-button",
          role: "listbox",
          dense: true
        }}
      >
        {(["es", "en"] as ("en" | "es")[]).map((lang: "en" | "es") => (
          <MenuItem
            key={lang}
            selected={locale === lang}
            onClick={(event) => handleLocaleItemClick(event, lang)}
          >
            <ListItemIcon>
              <SvgIcon
                component={(lang === "es" ? EsFlag : EnFlag) as ElementType}
                viewBox="0 0 512 512"
                sx={{ borderRadius: "50%" }}
              />
            </ListItemIcon>
            <ListItemText>
              {lang === "es" ? strings.spanish[locale] : strings.english[locale]}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const renderFilterMenu = () => {
    const badge = filter === "all" ? null : filter;
    return (
      <>
        <Tooltip title={strings.filterSkills[locale]}>
          <IconButton
            id="filter-button"
            size="large"
            aria-label={strings.filterSkills[locale]}
            aria-haspopup="listbox"
            aria-controls="filter-menu"
            onClick={handleFilterMenuClick}
            color="inherit"
          >
            <Badge badgeContent={badge} color="error">
              <FilterListIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          id="filter-menu"
          anchorEl={filterAnchor}
          open={Boolean(filterAnchor)}
          onClose={handleFilterClose}
          MenuListProps={{
            "aria-labelledby": "filter-button",
            role: "listbox",
            dense: true
          }}
        >
          {(["all", "F", "B"] as FilterOption[]).map((filterOption: FilterOption) => (
            <MenuItem
              key={filterOption}
              selected={filter === filterOption}
              onClick={(event) => handleFilterItemClick(event, filterOption)}
            >
              <ListItemText>{strings[filterOption][locale]}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, whiteSpace: "nowrap" }}>
            {strings.title[locale]}
          </Typography>
          {renderFilterMenu()}
          {renderLocaleMenu}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainAppbar;
