import "./incomingStaff.css";
import "../../assets/css/dashboard.css";

import { DataGrid } from "@mui/x-data-grid";
import { Check, Close } from "@mui/icons-material";
import { userRows } from "../../dummyData.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";

export default function IncomingStaff() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "user",
      headerName: "Name",
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
    { field: "Designation", headerName: "Role", width: 130 },
    { field: "Branch", headerName: "Branch", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/staff/" + params.row.id}>
              <button className="userListEdit">View</button>
            </Link>
            <Check
              className="userListDelete" id="accept"
              onClick={() => handleDelete(params.row.id)}
            />
            <Close
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    { field: "Date", headerName: "Date", width: 130 },
  ];

  return (
    <div className="staffList">
      <div className="TitleContainer">
        <h1 className="Title">Applications</h1>
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
