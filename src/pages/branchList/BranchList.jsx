import "./branchList.css";
import "../../assets/css/dashboard.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddBox } from "@mui/icons-material";

// style for modal
const style = {
  position: "absolute",
  "overflow-x": "hidden",
  "overflow-y": "scroll",
  top: "50%",
  right:"0px",
  transform: "translate(0%, -50%)",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  display: "flex",
  "flex-direction": "column",
};

export default function BranchList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="branchList">
      <div className="TitleContainer">
        <h1 className="Title">Branches</h1>
        <div>
          <button className="AddButton" onClick={handleOpen}>
            New Branch
          </button>
          <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title"><AddBox className="panelIcon"/> ADD NEW BRANCH</span>
                  <div class="close" onClick={handleClose} title="Close">X</div>
                </div>
              </div>
              <form action="" className="dashboardform">
                <div className="dashboardformItem">
                  <label>Branch Address</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Branch Email Address</label>
                  <input type="text" />
                </div>

                <button className="dashboardformButton">Create</button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>

      <div className="customcontainer">
        <div className="featured">
          <div className="featuredItem">
              <span className="featuredTitle">Branch 1</span>
              <div className="featuredTitle2">Total Revenue</div>
              <div className="featuredMoneyContainer">            
                  <span className="money">$545,000</span>
              </div>
              <span className="address">12, Oko Awo Street, Victoria Island, Lagos State</span>
          </div>

          <div className="featuredItem">
              <span className="featuredTitle">Branch 2</span>
              <div className="featuredTitle2">Total Revenue</div>
              <div className="featuredMoneyContainer">            
                  <span className="money">$785,000</span>
              </div>
              <span className="address">12, Awolowo Street, Ibadan, Ogun State</span>
          </div>
          

          
      </div>
    </div>
    </div>
  );
}
