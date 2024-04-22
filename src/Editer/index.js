import React from "react";
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
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function index() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    // Example API endpoint
    const url = 'http://localhost:4000/upload';

    // Fetch API to send the file to the server
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
              sx={{ color: "white" }}
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
        justifyContent="center"
        borderRadius={2}
        sx={{
          backgroundColor: "rgb(52, 58, 64)",
          padding: "1rem",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
          return (
            <Card
              key={el}
              sx={{
                maxWidth: "100%",
                borderRadius: "10px",
                backgroundColor: "#6c757d",
                color: "white",
              }}
            >
              <CardMedia
                component="video"
                sx={{ height: 160 }}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Path to your video file
                title="green iguana"
                muted
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography
                  variant="body2"
                  //   color="text.secondary"
                >
                  2.30 min
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button variant="contained" size="small">
                  Download
                </Button> */}
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  size="small"
                >
                  Upload file
                  <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
