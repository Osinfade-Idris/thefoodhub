import "./staff.css";
import Passport from "../../assets/images/avatar.png";
import PermIdentity from "@mui/icons-material/PermIdentity";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

export default function Staff() {
  return (
    <div className="staff">
      <div className="TitleContainer">
        <h1 className="Title">Edit Staff</h1>
      </div>
      <div className="staffContainer">
        <div className="staffShow">
          <div className="staffShowTop">
            <img src={Passport} alt="" className="staffShowImg" />

            <div className="staffShowTopTitle">
              <span className="ShowStaffname">Idris Abiodun</span>
              <span className="ShowStaffTitle">Software Engr</span>
            </div>
          </div>
          <div className="staffShowbottom">
            <span className="staffShowTitle">Account Details</span>
            <div className="staffShowInfo">
              <PermIdentity className="staffShowIcon" />
              <span className="staffShowInfoTitle">Drizz99</span>
            </div>
            <div className="staffShowInfo">
              <CalendarToday className="staffShowIcon" />
              <span className="staffShowInfoTitle">01/01/1997</span>
            </div>{" "}
            <span className="staffShowTitle">Contact Details</span>
            <div className="staffShowInfo">
              <PhoneAndroid className="staffShowIcon" />
              <span className="staffShowInfoTitle">07069576909</span>
            </div>
            <div className="staffShowInfo">
              <MailOutline className="staffShowIcon" />
              <span className="staffShowInfoTitle">idrisabiodun@gmail.com</span>
            </div>
            <div className="staffShowInfo">
              <LocationSearching className="staffShowIcon" />
              <span className="staffShowInfoTitle">Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="staffUpdate">
          <span className="staffUpdateTitle">Edit</span>
          <form className="staffUpdateForm">
            <div className="staffUpdateLeft">
              <div className="staffUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Drizz"
                  className="staffUpdateInput"
                />
              </div>

              <div className="staffUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Idris Abiodun"
                  className="staffUpdateInput"
                />
              </div>

              <div className="staffUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="idrisabiodun@gmail.com"
                  className="staffUpdateInput"
                />
              </div>

              <div className="staffUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="07069576909"
                  className="staffUpdateInput"
                />
              </div>

              <div className="staffUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Lagos, Nigria"
                  className="staffUpdateInput"
                />
              </div>
            </div>

            <div className="staffUpdateRight">
              <div className="staffUpdateUpload">
                <img src={Passport} alt="" className="staffUpdateImg" />
                <label htmlFor="file">
                  <Publish className="staffUpdateIcon"/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="staffUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
