import Exchange from "./pages/Exchange/Exchange";
import Library from "./pages/Library/Library";
import Payouts from "./pages/Payouts/Payouts";
import Settings from "./pages/settings/Settings";

import { CgArrowsExchange } from 'react-icons/cg';
import { RiBookMarkLine } from 'react-icons/ri'
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Dashboard from "./pages/Dashboard/Dashboard";

export const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <DashboardRoundedIcon/>,
    element: <Dashboard/>
  },
  {
    path: "exchange",
    name: "Exchange",
    icon: <CgArrowsExchange/>,
    element: <Exchange/>
  },
  {
    path: "library",
    name: "Library",
    icon: <RiBookMarkLine/>,
    element: <Library/>
  },
  {
    path: "payouts",
    name: "Payouts",
    icon: <WalletRoundedIcon/>,
    element: <Payouts/>
  },
  {
    path: "settings",
    name: "Settings",
    icon: <SettingsRoundedIcon/>,
    element: <Settings/>
  }
]

