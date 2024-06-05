import EsFlag from "./assets/es.svg?react";
import EnFlag from "./assets/uk.svg?react";
import { AppBar, IconButton, SvgIcon, Toolbar, Tooltip, Typography } from "@mui/material";

function Appbar() {
  const locale = "en";
  const Flag = locale === "es" ? EsFlag : EnFlag;
  const title = locale === "es" ? "Desarrollador Full-stack" : "Full-stack developer";
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1, whiteSpace: "nowrap" }}>
            {title}
          </Typography>
          <Tooltip title="Cambiar idioma">
            <IconButton color="inherit">
              <SvgIcon component={Flag} viewBox="0 0 512 512" sx={{ borderRadius: "50%" }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
}

export default Appbar;
