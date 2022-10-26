import "./categoryList.css";
import "../../assets/css/dashboard.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddBox, Edit } from "@mui/icons-material";

// style for modal
const style = {
  position: "absolute",
  "overflow-x": "hidden",
  "overflow-y": "scroll",
  top: "50%",
  right: "0px",
  transform: "translate(0%, -50%)",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  display: "flex",
  "flex-direction": "column",
};

export default function CategoryList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  

  return (
    <div className="CategoryList">
      <div className="TitleContainer">
        <h1 className="Title">Product Categories</h1>
        <div>
          <button className="AddButton" onClick={handleOpen2}>
            New Category
          </button>
          
          <Modal
            open={open2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title">
                    <AddBox className="panelIcon" /> ADD NEW CATEGORY
                  </span>
                  <div class="close" onClick={handleClose2} title="Close">
                    X
                  </div>
                </div>
              </div>
              <form action="" className="dashboardform">
                <div className="dashboardformItem">
                  <label>Category Name</label>
                  <input type="text" />
                </div>

                <button className="dashboardformButton">Create</button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>

      <div class="menu-div">
        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>46</h2>
            FOODS
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>25</h2>
            DRINKS
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>23</h2>
            PASTRIES
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>13</h2>
            SOUP BOWLS
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>8</h2>
            PIZZA
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>3</h2>
            SHAWARMA
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>9</h2>
            CAKES
          </div>
        </div>

        <div class="menu-link" onClick={handleOpen}>
          <div class="detail">
            <h2>16</h2>
            COCKTAILS
          </div>
        </div>

        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title">
                    <Edit className="panelIcon" /> EDIT CATEGORY
                  </span>
                  <div class="close" onClick={handleClose} title="Close">
                    X
                  </div>
                </div>
              </div>
              <form action="" className="dashboardform">
                <div className="dashboardformItem">
                  <label>Category Name</label>
                  <input type="text" />
                </div>

                <button className="dashboardformButton">Update</button>
              </form>
            </Box>
          </Modal>

      </div>
    </div>
  );
}
