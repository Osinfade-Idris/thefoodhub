import React,{useState} from 'react'
import "./topbar.css"
import Passport from '../../assets/images/avatar.png';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  const [extra, setExtra] = useState(false);
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
              <img onClick={()=> setExtra(!extra)} src={Passport} alt="Avatar" className="topAvatar" />

                <div className={`toggle ${!extra && 'dis-none'}`}>
                  <a><div class="sub-link"> My Profile </div></a>
                  <a><div class="sub-link">Log-Out </div></a>
                  </div>	
                </div>
        </div>
    </div>
  )
}
