import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const SidebarData = [
     {
         title: "Home",
         icon: <HomeIcon />,
         link: "/home",
     },
     {
        title: "Register",
        icon: <ExitToAppIcon />,
        link: "/register",
    },
    {
        title: "Login",
        icon: <LockOpenIcon />,
        link: "/login",
    }
    ]