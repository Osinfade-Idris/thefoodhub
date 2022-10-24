import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData.js";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddBox, Edit} from "@mui/icons-material";

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

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "Product",
      headerName: "Products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.Name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "Status", headerName: "Status", type: "text", width: 120 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/product/" + params.row.id}> */}

            <div>
              <button className="productListEdit" onClick={handleOpen2}>Edit</button>
              <Modal open={open2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
            <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title"><Edit className="panelIcon"/> EDIT PRODUCT</span>
                  <div class="close" onClick={handleClose2} title="Close">X</div>
                </div>
              </div>
              <form action="" className="dashboardform">
                <div className="dashboardformItem">
                  <label>Product Name</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Price</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Active</label>
                  <select className="dashboardformSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <button className="dashboardformButton">Update</button>
              </form>
              </Box>
          </Modal>
          </div>

            {/* </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <div className="TitleContainer">
        <h1 className="Title">Products</h1>
        <div>

          <button className="AddButton" onClick={handleOpen3}> New Product</button>
          <Modal open={open3} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
            <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title"><AddBox className="panelIcon"/> ADD NEW PRODUCT</span>
                  <div class="close" onClick={handleClose3} title="Close">X</div>
                </div>
              </div>
              <form className="dashboardform">

              <div className="dashboardformItem">
                  <label>Product Category</label>
                  <select className="dashboardformSelect">
                    <option value="FOODS">FOODS</option>
                    <option value="DRINKS">DRINKS</option>
                    <option value="COCKTAILS">COCKTAILS</option>
                    <option value="PASTRIES">PASTRIES</option>
                  </select>
                </div>

                <div className="dashboardformItem">
                  <label>Product Name</label>
                  <input type="text" />
                </div>

                <div className="dashboardformItem">
                  <label>Price</label>
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

          <button className="AddButton" onClick={handleOpen}>
            Load Stock
          </button>
          <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
            <div className="dashboardformheader">
                <div class="in">
                  <span id="panel-title"><AddBox className="panelIcon"/> LOAD NEW STOCK</span>
                  <div class="close" onClick={handleClose} title="Close">X</div>
                </div>
              </div>
              <form action="" className="dashboardform">
              <div className="dashboardformItem">
                  <label>Choose Product</label>
                  <select className="dashboardformSelect">
                    <option value="Rice">RICE</option>
                    <option value="Beans">BEANS</option>
                    <option value="Rice">EGG</option>
                    <option value="Beans">COKE</option>
                    <option value="Rice">PRO</option>
                    <option value="Beans">RWY</option>
                  </select>
                </div>

                <div className="dashboardformItem">
                  <label>Stock Quantity</label>
                  <input type="text" />
                </div>

 

                <button className="dashboardformButton">Load Stock</button>
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
  )
}
