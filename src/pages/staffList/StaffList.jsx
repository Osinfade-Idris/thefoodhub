import "./staffList.css";
import "../../assets/css/dashboard.css";

import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData.js";
import { Link } from "react-router-dom";
import { useState } from "react";
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

export default function StaffList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="staffListUser">
            <img className="staffListImg" src={params.row.Passport} alt="" />
            {params.row.Name}
          </div>
        );
      },
    },
    { field: "Email", headerName: "Email", width: 130 },
    { field: "Designation", headerName: "Designation", width: 130 },
    { field: "Status", headerName: "Status", type: "text", width: 120 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/staff/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="staffList">
      <div className="TitleContainer">
        <h1 className="Title">Staff</h1>
        <div>
          <button className="AddButton" onClick={handleOpen}>
            New Staff
          </button>
          <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title"><AddBox className="panelIcon"/> ADD NEW STAFF</span>
                  <div class="close" onClick={handleClose} title="Close">X</div>
                </div>
              </div>
              <form action="" className="dashboardform">
                <div className="dashboardformItem">
                  <label>First Name</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Last Name</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Email</label>
                  <input type="email" />
                </div>

                <div className="dashboardformItem">
                  <label>Phone</label>
                  <input type="email" />
                </div>

                <div className="dashboardformItem">
                  <label>Last Name</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Email</label>
                  <input type="email" />
                </div>

                <div className="dashboardformItem">
                  <label>Phone</label>
                  <input type="email" />
                </div>

                <div className="dashboardformItem">
                  <label>Gender</label>
                  <div className="dashboardformGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                    />
                    <label for="female">Female</label>
                  </div>
                </div>

                <div className="dashboardformItem">
                  <label>Address</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Active</label>
                  <select className="dashboardformSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <button className="dashboardformButton">Create</button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
