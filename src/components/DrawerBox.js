import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const DrawerBox = ({ toggleDrawer }) => {
  let navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let navigateTo = (to) => {
    toggleDrawer();
    navigate(to);
  };

  return (
    <Box
      sx={{
        width: 250,
      }}
    >
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigateTo("/")}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
      </List>
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigateTo("/team")}>
            <ListItemIcon>
              <PeopleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Manage Team"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigateTo("/contacts")}>
            <ListItemIcon>
              <ContactsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Contacts information"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigateTo("/invoices")}>
            <ListItemIcon>
              <ReceiptOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Invoices Balances"} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
      </List>
      <List>
        <ListItem>
          <ListItemButton onClick={() => navigateTo("/bar")}>
            <ListItemIcon>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Bar Chart"} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => navigateTo("/pie")}>
            <ListItemIcon>
              <PieChartOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Pie Chart"} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => navigateTo("/line")}>
            <ListItemIcon>
              <TimelineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Line Chart"} />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => navigateTo("/geography")}>
            <ListItemIcon>
              <MapOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Geography Chart"} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
      </List>
    </Box>
  );
};

export default DrawerBox;
