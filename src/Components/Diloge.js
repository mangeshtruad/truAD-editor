import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ data }) {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectOption] = useState("option");
  const handleDepartment = async () => {
    try {
      fetch(
        `https://truad-dashboard-backend.onrender.com/api/ticket/edit/${data._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            ...data,
            supportTeam: selectedOption,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then((el) => console.log(el));
    } catch (error) {
      console.log("error=>", error);
    }
  };
  const handleSelectChange = (e) => {
    setSelectOption(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Send Another Dept</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select Department to send this Ticket"}
        </DialogTitle>
        <DialogContent>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            style={{ width: "100%", height: "40px" }}
          >
            <option value="option">Select Option</option>
            <option value="IT Department">IT Department</option>
            <option value="Sales And Marketing Department">
              Sales And Marketing Department
            </option>
            <option value="Account Department">Account Department</option>
            <option value="HR Department">HR Department</option>

            {/* Add more options as needed */}
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              handleDepartment();
            }}
            autoFocus
            variant="outlined"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
