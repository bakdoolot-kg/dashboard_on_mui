import { Outlet } from "react-router-dom";
import {
  Box,
  Toolbar,
  CssBaseline,
} from "@mui/material";

import Sidebar from "../../components/sidebar/Sidebar";
import Appbar from "../../components/appbar/Appbar";



const drawerWidth = 240;

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar drawerWidth={drawerWidth}/>

      <Box
        component="main"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "background.default", }}
      >
        <Toolbar />
        <Outlet />
      </Box>

      <Sidebar drawerWidth={drawerWidth} showAd={true}/>
    </Box>
  );
};

export default Layout;
