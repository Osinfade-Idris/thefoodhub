import React from 'react'
import "./topbar.css"
import Passport from '../../assets/images/avatar.png';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">TheFoodHub</span>
            </div>

            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNoneIcon/>
                <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                <LanguageIcon/>
                <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                <SettingsIcon/>
              </div>
              <img src={Passport} alt="Avatar" className="topAvatar" />

                <div class="toggle">
                  <a href="user-profile.php?user_id=<?php echo $loguser_id?>"><div class="sub-link"><i class="fa fa-eye"></i> My Profile </div></a>
                  <a href="../connection/code.php?action=logout"><div class="sub-link"><i class="fa fa-sign-out-alt"></i> Log-Out </div></a>
                  </div>	
                </div>
        </div>
    </div>
  )
}
