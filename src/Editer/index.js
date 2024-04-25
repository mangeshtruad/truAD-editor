import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Stack,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Index() {
  const [Clip, setClip] = useState([]);

  const handleFileChange = (event, id) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("blendFiles", file);
    // Example API endpoint
    // const url = `http://localhost:4000/upload/${id}`;
    const url = `https://truad-dashboard-backend.onrender.com/upload/${id}`;

    // Fetch API to send the file to the server
    fetch(url, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Here, check the content type of the response
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json(); // If JSON, parse it and proceed
        } else {
          return response.text(); // If not JSON, return text
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/edits"
        // "http://localhost:4000/edits"
      );
      const clipData = await response.json();
      setClip(clipData.existingItem);
      console.log(clipData.existingItem
      );
    }

    fetchData();
  }, []); // Dependencies array is empty, this effect runs only once after the initial render.

  const extractBaseName = (path) => {
    // This regular expression matches the last segment before the last period (excluding any slashes), capturing the base name of the file
    const regex = /([^\/]+)(?=\.\w+$)/;
    const match = path.match(regex);
    return match ? match[1] : null; // match[1] because match[0] will contain the entire match, and match[1] will contain the first captured group
  };

  return (
    <Box sx={{ background: "rgb(108, 117, 125)" }} p={2}>
      <Box pt={1} pb={4}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          align="center"
          sx={{ background: "rgb(33, 37, 41)", color: "white" }}
          borderRadius={2}
        >
          Editer
        </Typography>
        <Stack direction={"row"} spacing={3} sx={{ paddingX: "2em" }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 60, color: "white" }}
          >
            <InputLabel
              id="demo-simple-select-standard-label"
              sx={{ color: "white", "&.Mui-focused": { color: "#343a40" } }}
            >
              Time
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Type"
              sx={{ color: "white", ".MuiSvgIcon-root": { color: "white" } }}
            >
              {[1, 2, 3, 4, 5, 6].map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        justifyContent=""
        borderRadius={2}
        sx={{
          backgroundColor: "rgb(52, 58, 64)",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {Clip.map(({ _id, name, location }) => {
          const clipname = extractBaseName(name);
          return (
            <Card
              key={_id}
              sx={{
                borderRadius: "10px",
                backgroundColor: "#6c757d",
                color: "white",
              }}
            >
              <CardMedia
                component="video"
                sx={{ height: 140 }}
                src={location.split("?")[0]}
                title={clipname}
                muted
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {clipname}
                </Typography>
                <Typography
                  variant="body2"
                >
                  2.30 min
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  component="a"
                  target="_blank"
                  href={location}
                  download={clipname}
                >
                  Download
                </Button>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  size="small"
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e)=>handleFileChange(e, _id)}
                  />
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
