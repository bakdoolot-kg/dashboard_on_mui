import {useState} from "react";
import {NavLink} from "react-router-dom";
import {
    Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Toolbar, Typography, Box, IconButton, Card, CardMedia, CardContent, Button
} from "@mui/material";
import {routes} from "../../router";

import logoCrypto from "../../assets/iconCrypto.png";
import iconKeepSafe from "../../assets/iconKeepSafe.png"

const Sidebar = ({drawerWidth, showAd}) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (e, index) => {
        setActiveTab(index);
    }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{pt: 3, ml: -2}}>
                    <IconButton>
                        <img src={logoCrypto} alt=""/>
                    </IconButton>
                    <Typography variant="h4" component="h3" sx={{flexGrow: 1, fontWeight: 600}}>Cryptos</Typography>
                </Toolbar>
                <Box sx={{ mt: 4 }}/>
                <Divider/>
                {/* List first */}
                <List>
                    {routes?.map((route, idx) => {
                        return (
                            <NavLink to={route.path} style={{color: "#000", textDecoration: "none"}} key={route.name}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={activeTab === idx}
                                        onClick={(e) => changeTab(e, idx)}
                                    >
                                        <ListItemIcon sx={{fontSize: 24, mr: -2.5}}>{route.icon}</ListItemIcon>
                                        <ListItemText primary={route.name}/>
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </List>
                <Box sx={{mt: 10}}/>
                {showAd && (
                    <Card sx={{ mx: 3, mb: 2, maxWidth: 345, border: "none", boxShadow: "none", background: "#00DEA3" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={iconKeepSafe}
                            sx={{objectFit: "contain"}}
                        />
                        <CardContent sx={{textAlign: "center"}}>
                            <Typography gutterBottom variant="h6" sx={{mt: -3}}>
                                Keep you safe!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Update your security password, keep your account safe!
                            </Typography>
                            <Button sx={{pt: 2.5}}>
                                <NavLink to="/settings" style={{color: "#fff" }}>
                                    Update privacy
                                </NavLink>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </Drawer>
        </>
    );
};

export default Sidebar;
