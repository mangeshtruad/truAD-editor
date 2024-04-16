import React, { useState } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import list from "./list";

export default function SideBar({ removeCookie, navigate }) {
  const [list1, setList1] = useState(list);
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to track hovered icon
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 }); // State to track mouse hover position

  const handleListColor = (i) => {
    const newArr = [...list];
    newArr.forEach((e) => {
      e.isActive = false;
    });
    newArr[i].isActive = true;

    setList1(newArr);
  };

  const location = useLocation(); // Get current location

  const handleMouseEnter = (e, i) => {
    setHoveredIcon(i);
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#191919",
        color: "white",
        height: "100vh",
        position: "relative",
        transition: "width 0.5s ease",
        
      }}
    >
      <Toolbar sx={{ background: "black", width: "100%", display: "flex", justifyContent: "center" ,position:"relative" }}>
        <img
          src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png"
          style={{
            height: "100px",
            width: "100px",
            margin: "0px",
            padding: "0px",
            zIndex: "1",
          }}
          alt=""
        />
        
      </Toolbar>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <div onClick={() => setCollapsed(!collapsed)} style={{ width: "100%" ,textAlign:"center",padding:"10px" }}>
          {collapsed ?<ArrowForwardIosIcon/>:<ArrowBackIosNewIcon/> }
        </div>
      </div> */}
      <List>
        {list1.map((e, i) => (
          <Link
            to={e.targetLink}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              
            }}
            key={i}
            onClick={() => {
              handleListColor(i);
            }}
          >
            <ListItem
              disablePadding
              style={
                e.isActive
                  ? {
                    backgroundColor: "red",
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: "80%",
                  }
                  : { width: "80%" }
              }
            >
              <ListItemButton
                onMouseEnter={(event) => handleMouseEnter(event, i)} // Set hovered icon index and position
                onMouseLeave={handleMouseLeave} // Reset hovered icon
              >
                <ListItemIcon
                  sx={{ color: "#d3d6dad9" }}
                  style={
                    collapsed
                      ? {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }
                      : {}
                  }
                >
                  {e.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={e.name} />}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
