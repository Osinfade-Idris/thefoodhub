import "./sidebar.css";
import { ShoppingBag, Inventory, Apartment, Dashboard, PeopleAlt, GroupAdd, ExitToApp, ChangeCircle, RequestQuote, Sell,
  Construction, BrunchDining
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/dashboard">
                <li className="sidebarListItem active">
                  <Dashboard className="sidebarIcon" />
                  Home
                </li>
              </Link>

              <Link to="/dashboard/branches">
              <li className="sidebarListItem">
                <Apartment className="sidebarIcon" />
                Branches
              </li>
              </Link>
            </ul>
          </div>
          

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <Link to="/dashboard/staffs">
                <li className="sidebarListItem">
                  <PeopleAlt className="sidebarIcon" />
                  Staff
                </li>
              </Link>
              <Link to="/dashboard/applications">
              <li className="sidebarListItem">
                <GroupAdd className="sidebarIcon" />
                Applicants
              </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Stock</h3>
            <ul className="sidebarList">
            <Link to="/dashboard/categories">
              <li className="sidebarListItem">
                <BrunchDining className="sidebarIcon" />
                Categories
              </li>
              </Link>
              <Link to="/dashboard/products">
              <li className="sidebarListItem">
                <BrunchDining className="sidebarIcon" />
                Food & Drinks
              </li>
              </Link>

              <Link to="">
                <li className="sidebarListItem">
                  <Inventory className="sidebarIcon" />
                  History
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Orders</h3>
            <ul className="sidebarList">
              <Link to="/dashboard/order">
              <li className="sidebarListItem">
                <RequestQuote className="sidebarIcon" />
                Make An Order
              </li>
              </Link>
              <li className="sidebarListItem">
                <Sell className="sidebarIcon" />
                Orders Report
              </li>

            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Settings</h3>
            <ul className="sidebarList">
              
              <li className="sidebarListItem">
                <ChangeCircle className="sidebarIcon" />
                Change Password
              </li>
              <li className="sidebarListItem">
                <ExitToApp className="sidebarIcon" />
                Sign-Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
