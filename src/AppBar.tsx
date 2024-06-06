import EsFlag from "./assets/es.svg?react";
import EnFlag from "./assets/uk.svg?react";
import ContentPaste from "@mui/icons-material/ContentPaste";
import {
  AppBar,
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

type LocaleChangeCallback = (value: string) => void;

function Appbar({
  locale,
  onLocaleChange
}: {
  locale: string;
  onLocaleChange: LocaleChangeCallback;
}) {
  const Flag = (locale === "es" ? EsFlag : EnFlag) as ElementType;
  const title = locale === "es" ? "Desarrollador Full-stack" : "Full-stack developer";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_event: React.MouseEvent<HTMLElement>, newValue: string) => {
    setAnchorEl(null);
    onLocaleChange(newValue);
  };
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, whiteSpace: "nowrap" }}>
            {title}
          </Typography>
          <Tooltip title="Cambiar idioma">
            <IconButton color="inherit" onClick={handleMenuClick}>
              <SvgIcon component={Flag} viewBox="0 0 512 512" sx={{ borderRadius: "50%" }} />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            <MenuItem
              selected={locale === "en"}
              onClick={(event) => handleMenuItemClick(event, "en")}
            >
              <ListItemIcon>
                <SvgIcon
                  component={EnFlag as ElementType}
                  viewBox="0 0 512 512"
                  sx={{ borderRadius: "50%" }}
                />
              </ListItemIcon>
              <ListItemText>{locale === "es" ? "Inglés" : "English"}</ListItemText>
            </MenuItem>
            <MenuItem
              selected={locale === "es"}
              onClick={(event) => handleMenuItemClick(event, "es")}
            >
              <ListItemIcon>
                <SvgIcon
                  component={EsFlag as ElementType}
                  viewBox="0 0 512 512"
                  sx={{ borderRadius: "50%" }}
                />
              </ListItemIcon>
              <ListItemText>{locale === "es" ? "Español" : "Spanish"}</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
}

export default Appbar;
