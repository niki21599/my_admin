import React, { useState } from "react";
import { Box, IconButton, useTheme, Typography, Drawer } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import DrawerBox from "../../components/DrawerBox";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Normaler Header*/}
        <Box
          display={{ md: "flex", xs: "none" }}
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
        <Box display={{ md: "flex", xs: "none" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <PersonOutlined />
          </IconButton>
        </Box>
        {/* Responsive Header Header*/}

        <Box display={{ md: "none", xs: "flex" }}>
          <IconButton onClick={toggleNavbar}>
            {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </IconButton>
        </Box>
        <Box display={{ md: "none", xs: "flex" }}>
          <Typography variant="h3" color={colors.grey[100]}>
            MyAdmin
          </Typography>
        </Box>
        <Box display={{ md: "none", xs: "flex" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
        </Box>
      </Box>
      <Drawer anchor="left" open={open} onClose={toggleNavbar}>
        {" "}
        <DrawerBox toggleDrawer={toggleNavbar} />
      </Drawer>
    </React.Fragment>
  );
};

export default Topbar;
