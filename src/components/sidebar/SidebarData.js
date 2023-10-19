import React from 'react';
import { FaUser } from "react-icons/fa";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import LogoutIcon from '@mui/icons-material/Logout';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: " Profile",
    path: "",
    icon: <FaUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Information",
        path: "/userprofile",
        icon: <FaUser />,
      },
      {
        title: "Payment Methods",
        path: "/PaymentMethods",
        icon: <PaymentIcon />,
      },

    ]
  },
  {
    title: 'My Vehicles',
    path: '/MyVehicles',
    icon: <DirectionsCarIcon />,
  },

  {
    title: 'Parking',
    path: '',
    icon: <LocalParkingIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Map',
        path: '/Map',
        icon: <LocationOnIcon />
      },
      // {
      //   title: 'Parking History',
      //   path: '/ParkingHistory',

      //   icon: <LocalParkingIcon />,
      // }
    ]
  },
  {
    title: 'Views Booking',
    path: '/viewbooking',
    icon: <VisibilityIcon />,
  },
  // {
  //   title: 'Logout',
  //   path: '/Logout',
  //   icon: <LogoutIcon />,
  // }
];
